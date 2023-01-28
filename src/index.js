import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";
import {Provider} from "react-redux";
import store from "./components/store";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: <Home /> },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "category/:catId",
                element: <CategoryProduct />,
            },
            {
                path: "product/:productId",
                element: <ProductDetail />,
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart />,
            },
            // {
            //     path: "search/:searchId",
            //     element: <SearchResults />,
            // },
        ],

    },
    // {
    //     path: "/shop",
    //     element: <Shop />,
    // },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
