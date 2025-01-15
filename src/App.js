import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import UserInfo from "./components/UserInfo";
import Order from "./components/Order";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Alice",
    };
    setUserName(data.name);
  }, []);

  return (
    <Auth0Provider
      // domain="dev-3x2ritez6xqi38mb.jp.auth0.com" feastive
      domain="dev-3x2ritez6xqi38mb.jp.auth0.com"
      // clientId="8iLG54GD4xCHqzfmeYOobZQ60H60eMWF" //feastive
      clientId="q5MzindG8HDcqYljqVVLGhatVrI44wNH"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Outlet />
            </main>
            <Footer />
          </div>
        </UserContext.Provider>
      </Provider>
    </Auth0Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/userinfo",
        element: <UserInfo/>,
      },
      {
        path: "/order",
        element: <Order/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
