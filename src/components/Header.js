import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  const cartItems = useSelector((store) => store.cart.items);

  //user authentication
  const {user, loginWithRedirect, logout, isAuthenticated} = useAuth0();
  // console.log(user);

  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <img className="w-16 h-16" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-4">
          <li className="text-gray-600">
            Online Status: {onlineStatus === false ? "🔴" : "🟢"}
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-orange-500 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-orange-500 font-medium"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-orange-500 font-medium"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="text-gray-600 hover:text-orange-500 font-medium"
            >
              Grocery
            </Link>
          </li>
          <li className="text-gray-600 hover:text-orange-500 font-medium">
            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>
            {cartItems.length}</Link>
          </li>
          <li className="text-gray-600 hover:text-orange-500 font-medium">
            {/* {loggedInUser} */}
            {isAuthenticated && <h3>Hello, {user.name}</h3>}
          </li>
        </ul>
        {/* <button
          className="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button> */}
        {/* {isAuthenticated && <h3>Hello, {user.name}</h3>} */}
        <div className="bg-orange-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition">
        {isAuthenticated ? (<button onClick={(e) => logout()}>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>Login</button>) }
        </div>
      </div>
    </div>
  );
};

export default Header;
