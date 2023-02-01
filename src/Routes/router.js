import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Main></Main>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children:[
            {
                path:"/", 
                element: <Home></Home>
            }, 
            {
                path: "/sign_in", 
                element:<SignIn></SignIn>
            }, 
            {
                path: "/sign_up", 
                element: <SignUp></SignUp>
            }
        ]
    }

])

export default router