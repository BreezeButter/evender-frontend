import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "../features/auth/slice/authSlice";

export default function ProfileUser() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        let isCancel = false;
        dispatch(fetchMe())
            .unwrap()
            .catch((err) => {
                if (!isCancel) toast.error(err.message);
            });
        return () => {
            isCancel = true;
        };
    }, []);

    function calculateAge(birthdate) {
        console.log(birthdate);
        const today = new Date();
        const birthdateObj = new Date(birthdate);

        let age = today.getFullYear() - birthdateObj.getFullYear();

        if (
            today.getMonth() < birthdateObj.getMonth() ||
            (today.getMonth() === birthdateObj.getMonth() &&
                today.getDate() < birthdateObj.getDate())
        ) {
            age -= 1;
        }

        return age;
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="w-[65%] ">
                {/* Head */}
                <div className="mb-20 text-4xl font-semibold">
                    <h1>Profile</h1>
                </div>

                {/* User */}
                <div className="flex flex-row justify-between mb-28">
                    {/* Left */}
                    <div className="avatar">
                        <div className="w-72 h-72 rounded-full">
                            <img src={user?.image} className="" />
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-[63%] pl-28 border-l border-gray-300 pt-6">
                        <div className="flex flex-row">
                            <p className="pr-4 font-semibold text-4xl">
                                {user?.firstName} {user?.lastName}
                            </p>
                            <p className="pt-3 ml-8 text-gray-400">#Username</p>
                            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/dollar-coin.png" alt="dollar-coin" />
                            <p className="pt-3 ml-8 text-gray-400">  {user?.coin}</p>
                        </div>
                        <p className="w-[70%] mt-8 font-light">
                            {user?.aboutMe}
                        </p>
                        <p className="mt-14 text-lg font-medium">
                            {user?.gender}
                        </p>
                        <div className="flex flex-row justify-between mt-4">
                            {user?.bdate ? (
                                <p className="text-lg font-medium">
                                    {calculateAge(user?.bdate)}
                                </p>
                            ) : (
                                <p></p>
                            )}
                            <Link to={`/evender/editprofile/${user?.id}`}>
                                <p className="underline cursor-pointer font-normal text-gray-500 hover:text-darkgraycute pr-10">
                                    Edit
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Event */}
                <div className="">
                    {/* bar */}
                    <div className="navbar bg-transparent border-b border-gray-300">
                        <div className="navbar-start"></div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg font-normal gap-4">
                                <li>
                                    <a className="text-darkbluecute hover:font-medium hover:bg-gray-200">
                                        my event
                                    </a>
                                </li>

                                <li>
                                    <a className="text-darkbluecute hover:font-medium hover:bg-gray-200">
                                        joined event
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end"></div>
                    </div>

                    {/* event details */}
                    <div className="flex flex-col justify-center items-center mt-6 gap-5 mb-24">
                        <div className="w-[70%] border border-gray-300 rounded-md p-6 ">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">
                                        Today, Fri 16 Jun 2023, 9:00 PM
                                    </p>
                                    <p className="text-lg font-medium text-darkbluecute mb-7">
                                        Urban Music Bar
                                    </p>
                                    <div className="flex flex-row">
                                        <p className="text-base font-medium mr-1 text-darkbluecute">
                                            at
                                        </p>
                                        <p className="text-base font-normal text-darkbluecute">
                                            Liberty Thonglor Music & Bar
                                        </p>
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] border border-gray-300 rounded-md p-6 ">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">
                                        Today, Fri 16 Jun 2023, 9:00 PM
                                    </p>
                                    <p className="text-lg font-medium text-darkbluecute mb-7">
                                        Urban Music Bar
                                    </p>
                                    <div className="flex flex-row">
                                        <p className="text-base font-medium mr-1 text-darkbluecute">
                                            at
                                        </p>
                                        <p className="text-base font-normal text-darkbluecute">
                                            Liberty Thonglor Music & Bar
                                        </p>
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] border border-gray-300 rounded-md p-6 ">
                            <div className="flex flex-row justify-between">
                                <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">
                                        Today, Fri 16 Jun 2023, 9:00 PM
                                    </p>
                                    <p className="text-lg font-medium text-darkbluecute mb-7">
                                        Urban Music Bar
                                    </p>
                                    <div className="flex flex-row">
                                        <p className="text-base font-medium mr-1 text-darkbluecute">
                                            at
                                        </p>
                                        <p className="text-base font-normal text-darkbluecute">
                                            Liberty Thonglor Music & Bar
                                        </p>
                                    </div>
                                </div>

                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
