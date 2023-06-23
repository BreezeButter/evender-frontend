import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAuth = useSelector((state) => state.auth.user);

    if (!isAuth) {
        return <Navigate to="/" />;
    }
    return children;
}
