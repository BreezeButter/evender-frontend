import { ImageIcon, LeftIcon } from "../icons";
// import Footer from "../layouts/Footer";

import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    getJoinEventByUserAsync,
    getChatByEventAsync,
} from "../features/Event/slice/eventSlice";
import { useRef } from "react";
import socket from "../configs/socketConfig";
import { convertDate } from "../utils/dateUtil";
// import e from "cors";

export default function Chat() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const roomId = useParams().id;
    const [currentRoom, setCurrentRoom] = useState(roomId);

    // const [file, setFile] = useState(null);

    // console.log(roomId);
    const ref = useRef();
    const refInput = useRef();
    const refUploadImage = useRef();

    const user = useSelector((state) => state.auth.user);
    const joinEventByUser = useSelector((state) => state.event.joinEventByUser);
    const chats = useSelector((state) => state.event.chats);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    // console.log(user);
    // useEffect(() => {
    //     setCurrentRoom(roomId);
    // }, [roomId]);

    useEffect(() => {
        socket.emit("joinRoom", currentRoom);
        const fn = async () => {
            await dispatch(getJoinEventByUserAsync()).unwrap();
            await dispatch(getChatByEventAsync(currentRoom)).unwrap();
        };
        fn();
    }, [currentRoom]);

    useEffect(() => {
        setMessages(chats);
    }, [chats]);

    const socketSendmessage = (input) => {
        // console.log(input);
        if (typeof input.message === "object") {
            input.message = new Blob([input.message]);
        }
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                userId: input.userId,
                message: input.message,
                firstName: input.firstName,
                image: input.image,
            },
        ]);
    };
    useEffect(() => {
        socket.on("receiveMessage", socketSendmessage);
        return () => {
            socket.off("receiveMessage", socketSendmessage);
        };
    }, []);

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    }, [messages]);

    const handleJoinRoom = async (roomId) => {
        setCurrentRoom(roomId);

        socket.emit("joinRoom", roomId);
    };

    const sendMessage = () => {
        if (message.message) {
            if (message.message === "" || message.message.trim() === "") return;
            socket.emit("sendMessage", {
                room: currentRoom,
                message: message.message,
                userId: user.id,
                firstName: user.firstName,
                image: user.image,
            });
            setMessages((prevMessages) => [
                ...prevMessages,
                { userId: user.id, message: message.message },
            ]);
        } else if (message.image) {
            socket.emit("sendMessage", {
                room: currentRoom,
                message: message.image,
                userId: user.id,
                firstName: user.firstName,
                image: user.image,
            });
            setMessages((prevMessages) => [
                ...prevMessages,
                { userId: user.id, message: message.image },
            ]);
            refUploadImage.current.value = null;
        }
        setMessage({ message: "" });
    };
    // console.log(typeof message);

    // const handleChangeFile = (e) => {
    //     if (e.target.files[0]) {
    //         setMessage({ image: e.target.files[0] });
    //     }
    // };
    return (
        <div className="flex border-t-2 ">
            <div className="relative">
                <div className="w-[250px] h-screen bg-lightbluecute opacity-50  shadow-indigo-950 shadow-xl"></div>

                <Link
                    to="/evender/event"
                    className=" text-white text-base font-medium cursor-pointer absolute left-14 bottom-28 hover:underline   flex items-center"
                >
                    <LeftIcon />
                    <div className="text-lightbluecute">Back</div>
                </Link>
            </div>
            <div className="flex flex-col w-[300px] border-r border-gray-200  ">
                <div className="flex flex-col ">
                    {joinEventByUser.map((el, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                handleJoinRoom(el.eventId),
                                    setActiveButtonIndex(index);
                            }}
                            className={`border-b-[1px] w-full border-gray-300 flex p-4 rounded font-semibold  hover:shadow-xl  shadow-slate-200  transition delay-120 duration-120 ease-in-out  ${activeButtonIndex === index
                                ? " bg-darkgraycute  shadow-slate-200  shadow-xl  text-white  hover:text-white"
                                : ""
                                }`}
                        >
                            <div className=" border-emerald-50 ">
                                <img
                                    src={el.Event.image1}
                                    alt=""
                                    className="w-[4rem] h-[4rem] rounded-full"
                                />
                            </div>
                            <div className="w-[80%] ">
                                <div
                                    className={`text-darkbluecute text-sm ${activeButtonIndex === index
                                        ? " text-white "
                                        : ""
                                        }`}
                                >
                                    {el.Event.title}
                                </div>
                                <div
                                    className={`text-darkbluecute text-sm   ${activeButtonIndex === index
                                        ? " text-white"
                                        : ""
                                        }`}
                                >
                                    @ {el.Event.placeName}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {/* <div className="w-[300px] h-screen bg-lightbluecute opacity-10"></div> */}
                {/* <div className="w-[100rem] m-auto mb-5 flex justify-center gap-5"> */}
                <div className="p-4">
                    {/* {joinEventByUser.map((el, index) => ( */}
                    {/* <h1 className="font-bold text-2xl  text-darkbluecute  transition delay-120 duration-120 ease-in-out w-fit p-2 rounded-full"> */}
                    {/* Event Room: {currentRoom} */}
                    {/* {joinEventByUser.length > 0 && */}
                    {/* joinEventByUser.find( */}
                    {/* (el) => el?.Event?.id == currentRoom */}
                    {/* ).Event?.title} */}
                    {/* </h1> */}
                    <div
                        className="rounded-xl h-[500px] w-[1000px] overflow-auto flex flex-col gap-3 p-2 border-2"
                        ref={ref}
                    >
                        {messages &&
                            messages.length > 0 &&
                            messages?.map((el, index) => {
                                const [date, time] = convertDate(el.createdAt);

                                if (el.userId === user.id) {
                                    return (
                                        <div
                                            className="chat chat-end"
                                            key={index}
                                        >
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full"></div>
                                            </div>
                                            {typeof el.message === "string" ? (
                                                <div className="chat-bubble">
                                                    {el.message}
                                                </div>
                                            ) : (
                                                <img
                                                    src={URL.createObjectURL(
                                                        el.message
                                                    )}
                                                    className="w-20 h-20"
                                                ></img>
                                            )}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className="chat chat-start"
                                            key={index}
                                        >
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img
                                                        src={
                                                            el.image ||
                                                            el.User.image
                                                        }
                                                        alt="User avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header">
                                                {el.firstName ||
                                                    el.User.firstName}
                                                <time className="text-xs opacity-50">
                                                    {date}
                                                    {time}
                                                </time>
                                            </div>
                                            {typeof el.message === "string" ? (
                                                <div className="chat-bubble">
                                                    {el.message}
                                                </div>
                                            ) : (
                                                <img
                                                    src={URL?.createObjectURL(
                                                        el.message
                                                    )}
                                                    className="w-20 h-20"
                                                ></img>
                                            )}
                                            <div className="chat-footer opacity-50">
                                                Delivered
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>

                    {/* ))} */}
                    {/* <div
                        className="rounded-xl h-[700px] w-[1200px] overflow-auto flex flex-col gap-3 p-2 border-2 "
                        ref={ref}
                    >
                        {messages.map((el, index) => {
                            if (el.userId == user.id) {
                                return (
                                    <h1
                                        key={index}
                                        className=" chat-bubble self-end w-[350px] bg-blue-500 rounded-3xl p-2 "
                                    >
                                        {el.message}
                                    </h1>
                                );
                            } else {
                                return (
                                    <div
                                        className="self-start w-[350px] flex flex-col gap-1 "
                                        key={index}
                                    >
                                        <div className="flex gap-1 ">
                                            <img
                                                src={el.User?.image || el.image}
                                                alt=""
                                                className="w-8 h-8 rounded-full "
                                            />
                                            <p className="text-xs self-center ">
                                                {el.User?.firstName ||
                                                    el.firstName}
                                            </p>
                                        </div>
                                        <h1 className="chat-bubble bg-gray-200 rounded-3xl p-2 ">
                                            {el.message}
                                        </h1>
                                    </div>
                                );
                            }
                        })}
                    </div> */}
                    <div className="flex h-10 mt-2 border-[1px] -p-2 ring-0 bg-white rounded-xl gap-2">
                        <input
                            type="text"
                            value={message.message}
                            placeholder="Write a message..."
                            onChange={(e) =>
                                setMessage({ message: e.target.value })
                            }
                            onKeyUp={(e) => {
                                if (e.key === "Enter") refInput.current.click();
                            }}
                            className="flex-1 items-center relative rounded-xl"
                        />

                        {/* You can open the modal using ID.showModal() method */}
                        {/* Open the modal using ID.showModal() method */}
                        {/* <button
                            className="btn"
                            onClick={() => window.my_modal_5.showModal()}
                        >
                            open modal
                        </button> */}
                        <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <form method="dialog" className="modal-box">
                                <img
                                    src={
                                        message.image &&
                                        URL.createObjectURL(message.image)
                                    }
                                    alt=""
                                    className="w-40 h-40 mx-auto"
                                />
                                <div className="modal-action">
                                    <button className="btn">confirm</button>
                                </div>
                            </form>
                        </dialog>
                        <input
                            type="file"
                            onChange={(e) => {
                                if (e.target.files[0]) {
                                    setMessage({ image: e.target.files[0] });
                                }
                                window.my_modal_5.showModal();
                            }}
                            ref={refUploadImage}
                            className="hidden"
                        />
                        <div
                            className="self-center "
                            onClick={() => refUploadImage.current.click()}
                            role="button"
                        >
                            <ImageIcon />
                        </div>
                        <button
                            onClick={sendMessage}
                            className=" bg-white text-blue-400 rounded-xl border-none  relative mr-2"
                            ref={refInput}
                        >
                            Send
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
}
