//  import { Children } from "react";
import "./App.css"


import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/Loading/Loading";
import Wallpaper from "./Pages/Wallpaper/Page";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Dashboard from "./Pages/dashboard/dashboard";
import Footer from "./Components/Footer/Footer";

//create the layout

const Layout = () => {
    return(
        <> 
        <Outlet />
        </>
    )
}


// create route

const router = createBrowserRouter ([
    {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <LandingPage />,
            
         },

         {
            path: "wallpaper",
            element: <Wallpaper />,

         },
         

         {
            path: "login",
            element: <Login />
         },

         {
            path: "register",
            element: <Register />,

         },

         {
            path: "dashboard",
            element: <Dashboard />,

         },
         {
            path: "footer",
            element: <Footer />,

         },

      
       
        ]
    }
    
])


function App(){
    return(
        <div className="Maincontainer">
             <div className=" Maincontainer">
        <RouterProvider router = {router} />

      </div>
        </div>
     
    )
}



export default App

