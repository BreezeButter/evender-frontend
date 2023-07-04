import { Link, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../features/ProfileUser/slice/profileUserSlice";
import { getUserHostEvent } from "../features/ProfileUser/slice/profileUserSlice";
import MyEventCard from "../features/ProfileUser/components/myEventCard";
import { getNextEventUser } from "../features/Event/slice/eventSlice";
import MyNextEventCard from "../features/ProfileUser/components/MyNextEventCard";

export default function ProfileUser() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const myEvent = useSelector((state) => state.profileUser.hostEvent);
    const userProfile = useSelector((state) => state.profileUser.userProfile);
    const eventUser = useSelector((state) => state.event.eventUser);
    const [click, setClick] = useState(true);
    const [activeButton, setActiveButton] = useState(true);
    const loading = useSelector((state) => state.profileUser.loadingEdite);

    console.log(loading, "loading");

    // const [renderUser, setRenderUser] = useState({})

    // useEffect(() => {

    //     dispatch(fetchProfile(id));
    //     console.log(id)

    // }, [id])

    useEffect(() => {
        let isCancel = false;
        const userFunction = async () => {
            // await dispatch(fetchMe()).unwrap();
            // .catch((err) => {
            //     if (!isCancel) toast.error(err.message);
            // });
            await dispatch(getUserHostEvent(id)).unwrap();
            await dispatch(getNextEventUser()).unwrap();
            await dispatch(fetchProfile(id)).unwrap();
        };
        userFunction();
        // return () => {
        // isCancel = true;
        // };
    }, []);

    function calculateAge(birthdate) {
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
                    <h1 className="text-darkgraycute">Profile</h1>
                </div>

                {/* User */}
                <div className="flex flex-row justify-between mb-28">
                    {/* Left */}
                    <div className="avatar">
                        <div className="w-80 h-80 rounded-full mr-10">
                            {loading ?
                                <span className="loading loading-spinner text-white w-20 h-20 "></span>
                                :
                                <img src={userProfile?.image} className="" />
                            }
                        </div>
                    </div>

                    {/* Right */}
                    <div className="w-[63%] pl-28 border-l border-gray-300 pt-6">
                        <div className="flex flex-row">
                            <p className="pr-4 font-semibold text-4xl text-darkgraycute ">
                                {userProfile?.firstName} {userProfile?.lastName}
                            </p>
                            <p className="pt-3 ml-8 text-gray-400">
                                #{userProfile?.UserType?.type}
                            </p>
                            {/* <img
                                width="94"
                                height="94"
                                src="https://img.icons8.com/3d-fluency/94/dollar-coin.png"
                                alt="dollar-coin"
                            /> */}
                            {/* <p className="pt-3 ml-8 text-gray-400 ">
                                {" "}
                                {user?.coin}
                            </p> */}
                        </div>
                        <p className="w-[70%] mt-8 font-light text-darkgraycute">
                            {user?.aboutMe}
                        </p>
                        <p className="mt-14 text-lg font-medium text-darkgraycute">
                            {user?.gender}
                        </p>
                        <div className="flex flex-row justify-between mt-4 text-darkgraycute">
                            {user?.bdate ? (
                                <p className="text-lg font-medium">
                                    {calculateAge(userProfile?.bdate)} years old
                                </p>
                            ) : (
                                <p></p>
                            )}

                            {userProfile?.id == user.id ? (
                                <Link
                                    to={`/evender/editprofile/${userProfile?.id}`}
                                >
                                    <p className="underline cursor-pointer font-normal text-gray-500 hover:text-darkgraycute pr-10">
                                        Edit
                                    </p>
                                </Link>
                            ) : (
                                []
                            )}
                        </div>
                    </div>
                </div>

                {/* Event */}
                {/* className={`hover:bg-white text-darkgraycute  ring-1 ring-violetcute hover:shadow-violetcute bg-white m-4 text-base font-normal hover:font-medium  hover:transition-transform hover:shadow-md hover:scale-[120%] transform-gpu ${activeButtonIndex === idx
                                    ? " bg-violetcute text-white hover:text-violetcute "
                                    : ""}`}
                                onClick={() => {
                                    setActiveButtonIndex(idx)
                                    handleChangeInput({
                                        target: {
                                            name: "eventCategoryId",
                                            value: el.id,
                                        }, */}

                <div className="">
                    {/* bar */}
                    <div className="navbar bg-transparent border-b border-gray-300">
                        <div className="navbar-start"></div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg font-normal gap-4">
                                <li
                                    onClick={() => {
                                        setActiveButton(!activeButton);
                                        setClick(!click);
                                    }}
                                >
                                    <a
                                        className={`text-darkbluecute hover:font-medium hover:bg-gray-200 ${activeButton ? " text-red-500" : ""
                                            } `}
                                    >
                                        Host event
                                    </a>
                                </li>

                                <li
                                    onClick={() => {
                                        setActiveButton(!activeButton);
                                        setClick(!click);
                                    }}
                                >
                                    <a
                                        className={`text-darkbluecute hover:font-medium hover:bg-gray-200 ${activeButton ? "" : "text-red-500"
                                            } `}
                                    >
                                        Joined event
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
                                    id={el.id}
                                    key={el.id}
                                    title={el.title}
                                    placeProvince={el.placeProvince}
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
                                    id={el.Event.id}
                                    title={el.Event.title}
                                    placeProvince={el.Event.placeProvince}
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
