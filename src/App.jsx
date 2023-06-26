import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import socket from "./configs/socketConfig";
function App() {
    const initialLoading = useSelector((state) => state.auth.initialLoading);

    useEffect(() => {
        if (!initialLoading) socket.connect();
        return () => {
            socket.disconnect();
        };
    }, []);

    if (initialLoading) {
        return <Loading />;
    }
    return (
        <div>
            <Router />
            <ToastContainer
                position="top-right"
                theme="dark"
                autoClose={3000}
            />
        </div>
    );
}

export default App;
