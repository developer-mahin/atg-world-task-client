import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Article from "../Pages/Article/Article";
import Education from "../Pages/Education/Education";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Job from "../Pages/Job/Job";
import Login from "../Pages/Login/Login";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

    {
        path: "/",
        element: <PrivateRoute><Main></Main></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: "/article",
                element: <PrivateRoute><Article></Article></PrivateRoute>
            },
            {
                path: "/education",
                element: <PrivateRoute> <Education></Education></PrivateRoute>
            },
            {
                path: "/job",
                element: <PrivateRoute><Job></Job></PrivateRoute>
            },
            {
                path: "/post-details/:id",
                element: <PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/post-details/${params.id}`)
                }
            },
        ]
    },
    {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/search",
        element: <PrivateRoute><Search></Search></PrivateRoute>
    }

])

export default router