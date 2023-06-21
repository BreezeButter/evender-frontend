import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const isAuthAdmin = useSelector((state) => state.auth.user);
    console.log(isAuthAdmin.isAdmin);

    if (!isAuthAdmin.isAdmin) {
        return <Navigate to="/" />;
    }
    return children;
}
