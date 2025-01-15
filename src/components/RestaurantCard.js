import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
    const { loggedInUser } = useContext(UserContext);

  return (
    <div data-testid="resCard" className="mx-10 my-5 w-[250px] hover:shadow-slate-500 border-6 shadow-xl">
      <div>
        <img
          className="w-full h-48 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="thali"
        />
      </div>
      <div className="p-4 rounded-2xl bg-white">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
          {name}
        </h3>
        <div className="text-sm text-gray-800 mb-2">{cuisines.join(", ")}</div>
        <div className="flex items-center text-sm text-yellow-500 mb-2">
          <span className="mr-1">⭐</span>
          {avgRating} stars
        </div>
        <div className="text-sm text-gray-800 mb-2">{costForTwo}</div>
        <div className="text-sm text-gray-600">
          {resData.info.sla.deliveryTime} minutes
        </div>
        {/* <h3>User: {loggedInUser}</h3> */}
      </div>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black bg-opacity-75 text-white m-2 p-2 rounded-lg">
          Avail Offer
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
