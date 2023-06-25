import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { getAccessToken } from "./utils/localstorage.js";
import { fetchMe } from "./features/auth/slice/authSlice.js";

if (getAccessToken()) {
    store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
