import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/Layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Shop from "./components/Shop";
import Home from "./components/Home";

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
                path: "shop/:shopId",
                element: <Shop />,
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
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
