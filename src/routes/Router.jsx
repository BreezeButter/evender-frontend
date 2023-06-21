import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import EditProfile from "../page/EditProfile";
import Landing from "../page/Landing";
import ProfileUser from "../page/ProfileUser";
// import EventPage from "../page/EventPage";
// import Landing from '../page/Landing';
// import EventPage from '../page/EventPage';
// import { Search } from 'react-router-dom';
import SearchPage from "../page/SearchPage";

// import Landing from '../page/Landing';
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import EventDetailPage from "../page/EventDetailPage";
import EventPage from "../page/EventPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Container />,
        children: [
            {
                path: "/",
                element: <SearchPage />,
            },
            {
                path: "/profile",
                element: <ProfileUser />,
            },
            {
                path: "/editprofile",
                element: <EditProfile />,
            },
            {
                path: "/landing",
                element: <Landing />,
                path: "/",
                element: <RegisterPage />,
            },
            {
                path: "eventdetails/:id",
                // element: <EventDetails />,
            },
            {
                path: "/login",
                element: (
                    // <RedirectIfLogin>
                    <LoginPage />
                    // </RedirectIfLogin>
                ),
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
