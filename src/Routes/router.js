import { createBrowserRouter } from "react-router-dom";
import Article from "../Pages/Article/Article";
import Education from "../Pages/Education/Education";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import UserDetails from "../Pages/Home/userDetails/UserDetails";
import Job from "../Pages/Job/Job";
import JobPage from "../Pages/Jobpage/JobPage";
import ViewDetails from "../Pages/Jobpage/ViewDetails";
import Login from "../Pages/Login/Login";
import Message from "../Pages/Message/Message";
import MyNetwork from "../Pages/MyNetwork/MyNetwork";
import Notification from "../Pages/Notification/Notification";
import PostDetails from "../Pages/PostDetails/PostDetails";
import AllActivityPost from "../Pages/Profile/Activities/AllActivityPost/AllActivityPost";
import Profile from "../Pages/Profile/Profile";
import UserPostDetails from "../Pages/Profile/UserPostDetails/UserPostDetails";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import Main from "../layout/Main";
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
                    return fetch(`https://huntyourjob.vercel.app/post-details/${params.id}`)
                }
            }


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
    },
    {
        path: "/user-details/:id",
        element: <PrivateRoute><UserDetails></UserDetails></PrivateRoute>,
        loader: ({ params }) => {
            return fetch(`https://huntyourjob.vercel.appuser-details/${params.id}`)
        }
    },
    {
        path: "/my-posts",
        element: <PrivateRoute><AllActivityPost></AllActivityPost></PrivateRoute>
    },
    {
        path: "/user-post-details/:id",
        element: <PrivateRoute><UserPostDetails></UserPostDetails></PrivateRoute>,
        loader: ({ params }) => {
            return fetch(`https://huntyourjob.vercel.appuser-post-details/${params.id}`)
        }
    },
    {
        path: "/message",
        element: <PrivateRoute><Message></Message></PrivateRoute>
    },
    {
        path: "/job-page",
        element: <PrivateRoute><JobPage></JobPage></PrivateRoute>
    },
    {
        path: "/view-details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => {
            return fetch(`https://huntyourjob.vercel.appgetASingleJob/${params.id}`)
        }
    },
    {
        path: "/my-network",
        element: <PrivateRoute><MyNetwork></MyNetwork></PrivateRoute>
    },
    {
        path: "/notification",
        element: <PrivateRoute><Notification></Notification></PrivateRoute>
    }

])

export default router
