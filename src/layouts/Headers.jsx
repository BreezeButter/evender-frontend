import { Link } from "react-router-dom";
import { SearchIcon2, UserIcon2, MessageIcon2 } from "../icons";
export default function Headers() {
    return (
        <div className="navbar bg-graynav text-textnav ">
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
                        <Link to="" className="hover:bg-gray-200">
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
                <SearchIcon2 className="cursor-pointer" />
                {/* Dropdown */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="flex items-center">
                        <UserIcon2 />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-sm bg-white border-none rounded-box w-64 z-50"
                    >
                        <div className="flex flex-row text-graynav justify-start items-center gap-5 mb-3 mt-1 pl-4">
                            <i className="fa-regular fa-circle-user fa-2xl"></i>
                            <div className="flex flex-col">
                                <h1>p boom</h1>
                                <p>pboom@mail.com</p>
                            </div>
                        </div>
                        <hr />
                        <li className="text-graynav mt-2 ">
                            <a>
                                Sign out
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        // <div className="navbar ">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost normal-case text-2xl text-lightbluecute hover:bg-gray-200">
        //             Evender.
        //         </a>
        //     </div>
        //     <div className="flex-none gap-2">
        //         <div className="form-control">
        //             <Link role="button">
        //                 <SearchIcon />
        //             </Link>
        //         </div>
        //         <div className="form-control">
        //             <Link role="button">
        //                 <MessageIcon />
        //             </Link>
        //         </div>
        //         <div className="dropdown dropdown-end">
        //             <label
        //                 tabIndex={0}
        //                 className="btn btn-ghost btn-circle avatar"
        //             >
        //                 <div className="w-10 rounded-full">
        //                     <img src="https://img.freepik.com/premium-vector/person-avatar-design_24877-38137.jpg?w=2000" />
        //                 </div>
        //             </label>
        //             <ul
        //                 tabIndex={0}
        //                 className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        //             >
        //                 <li>
        //                     <a>Profile</a>
        //                 </li>
        //                 <li>
        //                     <a>Settings</a>
        //                 </li>
        //                 <li>
        //                     <a>Logout</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    );
}
