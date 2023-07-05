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
import { Image } from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";
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
    const { id } = useParams();
    console.log(chats, "HHHHHHHHHHHHHHHHHHHHHHHH__________>>>>>>>>>");

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
        <>
            <div className="border-t border-gray-300 flex flex-row">
                {/* 1 */}
                <div className="w-[300px]">
                    <div className="relative">
                        <div className="w-[300px] h-screen bg-lightbluecute opacity-10"></div>
                        <Link to="/evender/event">
                            <p className="text-lightbluecute text-base font-medium cursor-pointer absolute left-14 bottom-28 hover:underline flex items-center">
                                <LeftIcon className="mr-2" />
                                Left chat
                            </p>
                        </Link>
                    </div>
                </div>

                {/* 2 */}

                <ScrollArea className="flex flex-col w-[700px] h-screen border-l border-r border-gray-300">
                    {joinEventByUser.map((el, index) => (
                        <div className="border-b border-gray-300  " key={index}>
                            <div
                                key={index}
                                onClick={() => {
                                    handleJoinRoom(el.eventId),
                                        setActiveButtonIndex(index);
                                }}
                                className={`py-6 pl-6 pr-3.5 flex flex-row items-center  cursor-pointer hover:bg-gray-200  ${
                                    activeButtonIndex === index
                                        ? " border-r-[5px] border-lightbluecute  text-white  bg-gray-200"
                                        : ""
                                }`}
                                // className="py-6 px-2 border-b  border-gray-300 flex flex-row items-center justify-center cursor-pointer hover:bg-gray-200"
                            >
                                <img
                                    src={el.Event.image1}
                                    alt=""
                                    className="rounded-full w-16 h-16 mr-7 object-cover"
                                />
                                <div
                                    className="flex flex-col"
                                    // onClick={() => {
                                    //     handleJoinRoom(el.eventId),
                                    //         setActiveButtonIndex(index);
                                    // }}
                                    // className={`border-b-[1px] w-full border-gray-300 flex p-4 rounded font-semibold  hover:shadow-xl  shadow-slate-200  transition delay-120 duration-120 ease-in-out  ${
                                    //     activeButtonIndex === index
                                    //         ? " bg-darkgraycute  shadow-slate-200  shadow-xl  text-white  hover:text-white"
                                    //         : ""
                                    // }`}
                                >
                                    <div className="flex flex-row justify-between">
                                        <h1 className="mb-2.5 text-base font-medium text-darkbluecute">
                                            {el.Event.title}
                                        </h1>
                                        {/* <p className="text-xs font-light ml-7 pt-1 text-gray-500">
                                        8:00 PM
                                    </p> */}
                                    </div>
                                    <p className="text-sm font-light text-darkbluecute ">
                                        at {el.Event.placeName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </ScrollArea>

                {/* 3 */}

                {/* <h1 className="font-bold text-2xl  text-darkbluecute pt-3 pb-3 transition delay-120 duration-120 ease-in-out w-fit p-2 rounded-full">
                        Room: Event Room: {currentRoom}
                        {joinEventByUser.length > 0 &&
                            joinEventByUser.find(
                                (el) => el?.Event?.id == currentRoom
                            ).Event?.title}
                    </h1> */}
                <div
                    className="w-full flex flex-col justify-between h-screen pb-32 px-11 pt-8"
                    ref={ref}
                >
                    <ScrollArea>
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
                                                <div className="w-8 rounded-full"></div>
                                            </div>
                                            {typeof el.message === "string" ? (
                                                <div className="chat-bubble bg-gray-200 text-darkbluecute">
                                                    {el.message}
                                                </div>
                                            ) : (
                                                <img
                                                    src={URL.createObjectURL(
                                                        el.message
                                                    )}
                                                    className="w-[400px] h-[250px] object-cover rounded-md mt-2"
                                                    // className="w-[50px] h-[50px] object-cover rounded-md mt-2"
                                                ></img>
                                            )}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            className="chat chat-start mb-4"
                                            key={index}
                                        >
                                            <div className="chat-image avatar">
                                                <div className="w-16 rounded-full">
                                                    <img
                                                        src={
                                                            el.image ||
                                                            el.User.image
                                                        }
                                                        alt="User avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div className="chat-header text-darkbluecute">
                                                {el?.firstName ||
                                                    el?.User?.firstName}{" "}
                                                {el?.lastName ||
                                                    el.User?.lastName}
                                                <time className="text-xs opacity-50 ml-2.5 text-gray-600">
                                                    {date} {time}
                                                </time>
                                            </div>
                                            {typeof el.message === "string" ? (
                                                <div className="chat-bubble bg-gray-200 text-darkbluecute">
                                                    {el.message}
                                                </div>
                                            ) : (
                                                <img
                                                    src={URL?.createObjectURL(
                                                        el.message
                                                    )}
                                                    className="w-[400px] h-[250px] object-cover rounded-md"
                                                ></img>
                                            )}
                                            {/* <div className="chat-footer opacity-50 text-gray-600">
                                                Delivered
                                            </div> */}
                                        </div>
                                    );
                                }
                            })}

                        {/* <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-16 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=8" />
                                </div>
                            </div>
                            <div className="chat-header">
                                Anakin
                                <time className="text-xs opacity-50 ml-2.5">
                                    12:46
                                </time>
                            </div>
                            <div className="chat-bubble bg-gray-200 text-darkbluecute ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laudantium iusto expedita
                                dolorum, error sit amet deserunt libero sequi
                                nesciunt soluta?
                            </div>
                            <div className="chat-footer opacity-50">
                                Seen at 12:46
                            </div>
                        </div> */}
                    </ScrollArea>
                    <div className="border border-gray-300 rounded-full flex items-center justify-between p-1.5">
                        <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle "
                        >
                            <form
                                method="dialog"
                                className="modal-box bg-white"
                            >
                                <img
                                    src={
                                        message.image &&
                                        URL.createObjectURL(message.image)
                                    }
                                    alt=""
                                    className="w-[500px] h-[350px] object-cover rounded-md mx-auto"
                                />
                                <div className="modal-action w-full flex flex-row justify-end items-center ">
                                    <Link
                                        to={`/evender/chat/${id}`}
                                        className=" w-[228px]"
                                    >
                                        <button
                                            className="btn w-full text-darkgraycute bg-white border hover:bg-darkgraycute hover:text-white border-darkgraycute "
                                            onClick={() => location.reload()}
                                        >
                                            Cancel
                                        </button>
                                    </Link>
                                    <button className="btn bg-darkgraycute text-white w-[228px]  ">
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </dialog>
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
                            className="w-full bg-transparent  outline-none pl-6 text-darkbluecute"
                        />
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
                        <Image
                            className=" flex h-8 w-8 mr-3  stroke-gray-600 hover:stroke-gray-800 ml-4"
                            onClick={() => refUploadImage.current.click()}
                            role="button"
                        />

                        <button
                            className="w-28 bg-lightbluecute rounded-full text-white py-2 hover:opacity-90"
                            onClick={sendMessage}
                            ref={refInput}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
