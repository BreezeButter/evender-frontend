import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import EditProfile from "../page/EditProfile";
import Landing from "../page/Landing";
import ProfileUser from "../page/ProfileUser";
import EventPage from "../page/EventPage";
// import Landing from '../page/Landing';
// import EventPage from '../page/EventPage';
// import { Search } from 'react-router-dom';
import SearchPage from "../page/SearchPage";

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
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
