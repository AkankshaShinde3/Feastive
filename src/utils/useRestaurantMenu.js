import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId); //1003414
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }

    useEffect(()=> {
        fetchMenu();
    }, []);

    return resInfo;
};

export default useRestaurantMenu;