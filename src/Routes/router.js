import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Article from "../Pages/Article/Article";
import Education from "../Pages/Education/Education";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Job from "../Pages/Job/Job";


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
                path: "/article", 
                element: <Article></Article>
            }, 
            {
                path: "/education", 
                element: <Education></Education>
            }, 
            {
                path: "/job", 
                element: <Job></Job>
            }
        ]
    }

])

export default router