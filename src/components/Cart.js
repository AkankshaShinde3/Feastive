import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const cartItems = useSelector((store) => store.cart.items);
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      loginWithRedirect(); // Redirect to login page
    } else {
      navigate("/userinfo"); // Proceed to checkout if authenticated
    }
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Your cart is hungry. Add items to it!</h1>}
        <ItemList items={cartItems} />
        
        {!isAuthenticated ? (
          <h2 className="text-red-500">Please login to proceed with checkout.</h2> // Message when not logged in
        ) : (
          totalAmount > 0 && (
            <div className="flex justify-center items-center">
              <div
                className="bg-orange-500 text-center text-white w-56 px-4 py-2 rounded-md shadow hover:bg-orange-600 transition cursor-pointer"
                onClick={handleCheckout} // Handle checkout click
              >
                Proceed To Checkout
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
