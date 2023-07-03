import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function ProtectedRouteAdmin({ children }) {


    const isAdmin = useSelector((state) => state.auth.admin);

    if (!isAdmin) {
        return <Navigate to="/" />;
    }
    return children;
}
