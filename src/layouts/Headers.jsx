import { Link } from "react-router-dom";
import { SearchIcon2, UserIcon2, MessageIcon2, SignOutIcon } from "../icons";
export default function Headers() {
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
                <MessageIcon2 className="cursor-pointer" />

                {/* Dropdown */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="flex items-center">
                        <UserIcon2 className="cursor-pointer" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow-sm bg-whitebg border border-gray-200 rounded-box w-64 z-50"
                    >
                        <div className="flex flex-row justify-start items-center gap-5 mb-3 mt-1 pl-4">
                            <div className="avatar">
                                <div className="w-16 h-16 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-base font-normal">
                                    p boom
                                </h1>
                                <p className="font-light">pboom@mail.com</p>
                                <p className="font-light text-xs text-gray-500 underline cursor-pointer mt-2 hover:text-darkgraycute">
                                    Edit profile
                                </p>
                            </div>
                        </div>
                        <hr />
                        <li className="mt-2 hover:font-medium">
                            <a>
                                Sign out
                                <SignOutIcon className=" opacity-50" />
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
