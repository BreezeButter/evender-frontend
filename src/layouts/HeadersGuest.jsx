import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HeadersGuest() {

    const isAuth = useSelector(state => state.auth.isAuthenticated)

    return (
        <div className="navbar text-darkbluecute">
            <div className="navbar-start">
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-xl text-lightbluecute  hover:bg-gray-200"
                >
                    Evender.
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="" className="hover:bg-gray-200 ">
                            about us
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="hover:bg-gray-200">
                            blog
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3 pr-2">
                {isAuth ? (<Link
                    to="/evender/event/"
                    className="btn bg-lightbluecute normal-case text-base text-white w-28 hover:text-lightbluecute hover:bg-gray-200 hover:border-none"
                >
                    Event
                </Link>) : (<Link
                    to="/login"
                    className="btn bg-lightbluecute normal-case text-base text-white w-28 hover:text-lightbluecute hover:bg-gray-200 hover:border-none"
                >
                    Login
                </Link>)}
            </div>
        </div>
    );
}
