import { ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
    const initialLoading = useSelector((state) => state.auth.initialLoading);

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
