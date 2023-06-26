import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMe } from "../features/auth/slice/authSlice";
import { getUserHostEvent } from "../features/ProfileUser/slice/profileUserSlice";
import MyEventCard from "../features/ProfileUser/components/myEventCard";
import { getNextEventUser } from "../features/Event/slice/eventSlice";
import MyNextEventCard from "../features/ProfileUser/components/MyNextEventCard";

export default function ProfileUser() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const myEvent = useSelector((state) => state.profileUser.hostEvent);
    const eventUser = useSelector((state) => state.event.eventUser);
    const [click, setClick] = useState(false);

    useEffect(() => {
        let isCancel = false;
        const userFunction = async () => {
            await dispatch(fetchMe())
                .unwrap()
                .catch((err) => {
                    if (!isCancel) toast.error(err.message);
                });
            await dispatch(getUserHostEvent(id)).unwrap();
            await dispatch(getNextEventUser()).unwrap();
        };
        userFunction();
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
                                    {calculateAge(user?.bdate)} years old
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
                                <li onClick={() => setClick(true)}>
                                    <a className="text-darkbluecute hover:font-medium hover:bg-gray-200">
                                        my event
                                    </a>
                                </li>

                                <li onClick={() => setClick(false)}>
                                    <a className="text-darkbluecute hover:font-medium hover:bg-gray-200">
                                        joined event
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end"></div>
                    </div>

                    {/* event details */}
                    {click ? (
                        <div className="flex flex-col justify-center items-center mt-6 gap-5 mb-24 ">
                            {myEvent.map((el) => (
                                <MyEventCard
                                    key={el.id}
                                    title={el.title}
                                    location={el.location}
                                    image1={el.image1}
                                    description={el.description}
                                    dateStart={el.dateStart}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center mt-6 gap-5 mb-24 ">
                            {eventUser.map((el) => (
                                <MyNextEventCard
                                    key={el.Event.id}
                                    title={el.Event.title}
                                    location={el.Event.location}
                                    image1={el.Event.image1}
                                    description={el.Event.description}
                                    dateStart={el.Event.dateStart}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
