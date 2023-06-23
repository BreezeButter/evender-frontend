import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
// import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Container from "../layouts/Container";
import Landing from "../page/Landing";
import EventPage from "../page/EventPage";
import SearchPage from "../page/SearchPage";
import Chat from "../page/Chat";
import ProfileUser from "../page/ProfileUser";
import EditProfile from "../page/EditProfile";
import AdminPage from "../page/AdminPage";
import HeadersGuest from "../layouts/HeadersGuest";
import Footer from "../layouts/Footer";
import EventDetailPage from "../page/EventDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeadersGuest />
                <Landing />
                <Footer />
            </>
        ),
    },
    {
        path: "/login",
        element: (
            // <RedirectIfAuthenticated>
            <LoginPage />
            //     </RedirectIfAuthenticated>
        ),
    },
    {
        path: "/register",
        element: (
            // <RedirectIfAuthenticated>
            <RegisterPage />
            // </RedirectIfAuthenticated>
        ),
    },
    {
        path: "/evender",
        element: (
            // <ProtectedRoute>
            <Container />
            // </ProtectedRoute>
        ),
        children: [
            {
                path: "event",
                element: <EventPage />,
            },
            {
                path: "eventdetail/:id",
                element: <EventDetailPage />,
            },
            {
                path: "chat",
                element: <Chat />,
            },
            {
                path: "profile/:id",
                element: <ProfileUser />,
            },
            {
                path: "editprofile/:id",
                element: <EditProfile />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            // {
            //     path: "admin",
            //     element: (
            //         <ProtectedRoute>
            //             <AdminPage />
            //         </ProtectedRoute>
            //     ),
            //     // children: [
            //     //     {
            //     //         path: "manageuser",
            //     //         // element: <AdminManageUser/>,
            //     //     },
            //     // ],
            // },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
