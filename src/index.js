import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard.js";
import Protect from './Protect.js';
import { AuthProvider } from './auth/AuthProvider.js';

const router = createBrowserRouter([
{
    path: "/",
    element: <Login/>,
},
{
    path: "/Signup",
    element: <Signup/>,
},
{
    path: "/",
    element: <Protect/>,
    children: [
        {
        path: "/Dashboard",
        element: <Dashboard/>,
        },
    ], //Children toma un arreglo de rutas hijas 
}

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode> //Auth Provider Agregado despues de crear la carpeta con el hook
);
