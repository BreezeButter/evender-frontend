import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export default function ProtectedRouteAdmin({ children }) {


    const user = useSelector((state) => state.auth.user);

    if (!user.isAdmin) {
        return <Navigate to="/" />;
    }
    return children;
}
