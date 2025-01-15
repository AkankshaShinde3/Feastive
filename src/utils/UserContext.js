import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Dev",
});

export default UserContext;