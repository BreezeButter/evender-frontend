import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import Container from "../layouts/Container";
import Landing from "../page/Landing";
import EventPage from "../page/EventPage";
import SearchPage from "../page/SearchPage";
import Chat from "../page/Chat";
import ProfileUser from "../page/ProfileUser";
import HeadersGuest from "../layouts/HeadersGuest";
import Footer from "../layouts/Footer";
import Eventmanagement from "../page/Manageeventpage";
// import { Outlet } from "react-router-dom/dist";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Paymentsuccess from "../page/Paymentsuccess";
import EventDetailPage from "../page/EventDetailPage";
import EditProfile from "../page/EditProfile";
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
            <ProtectedRoute>
                <Container />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "event",
                element: <EventPage />,
            },

            {
                path: "chat/:id",
                element: <Chat />,
            },
            {
                path: "eventDetail/:id",
                element: <EventDetailPage />,
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
            {
                path: "success",
                element: <Paymentsuccess />,
            },
        ],
    },
    {
        path: "/admin",
        element: (
            <>
                {/* <HeadersGuest /> */}
                <Container />
                {/* <Footer /> */}
            </>
        ),
        children: [
            {
                path: "eventmanagement",
                element: <Eventmanagement />,
            },
        ],
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
