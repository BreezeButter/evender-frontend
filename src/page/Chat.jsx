import { LeftIcon } from "../icons";
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

export default function Chat() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const roomId = useParams().id;
    const [currentRoom, setCurrentRoom] = useState(roomId);
    console.log(roomId);
    const ref = useRef();
    const refInput = useRef();

    const user = useSelector((state) => state.auth.user);
    const joinEventByUser = useSelector((state) => state.event.joinEventByUser);
    const chats = useSelector((state) => state.event.chats);

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
        if (message === "" || message.trim() === "") return;
        socket.emit("sendMessage", {
            room: currentRoom,
            message,
            userId: user.id,
            firstName: user.firstName,
            image: user.image,
        });
        setMessages((prevMessages) => [
            ...prevMessages,
            { userId: user.id, message },
        ]);
        setMessage("");
    };
    console.log(joinEventByUser);
    return (
        <div className="flex border-t-2">
            <div className="relative">
                <div className="w-[250px] h-screen bg-lightbluecute opacity-25"></div>

                <Link
                    to="/evender/event"
                    className="text-lightbluecute text-base font-medium cursor-pointer absolute left-14 bottom-28 hover:underline flex items-center"
                >
                    <LeftIcon />
                    Back
                </Link>
            </div>
            <div className="flex flex-col w-[300px] border-r border-gray-200">
                <div className="flex flex-col">
                    {joinEventByUser.map((el, index) => (
                        <button
                            key={index}
                            onClick={() => handleJoinRoom(el.eventId)}
                            className="border-b-[1px] border-gray-300 flex p-4 rounded font-semibold hover:bg-lightbluecute hover:text-white  "
                        >
                            <div className="text-gray-400 text-sm">
                                <img
                                    src={el.Event.image1}
                                    alt=""
                                    className="w-[4rem] h-[4rem] rounded-full"
                                />
                            </div>
                            <div className="w-[80%]">
                                <div className="flex text-sm ">
                                    {el.Event.title}
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {el.Event.placeName}
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
                    <h1 className="font-semibold text-xl text-blue-400  w-fit p-2 rounded-full bg-white">
                        {/* Event Room: {currentRoom} */}
                        {joinEventByUser.length > 0 &&
                            joinEventByUser.find(
                                (el) => el?.Event?.id == currentRoom
                            ).Event?.title}
                    </h1>
                    {/* ))} */}
                    <div
                        className="rounded-xl h-[480px] w-[900px] overflow-auto flex flex-col gap-3 p-2 border-2 border-white bg-white mt-4"
                        ref={ref}
                    >
                        {messages.map((el, index) => {
                            if (el.userId == user.id) {
                                return (
                                    <h1
                                        key={index}
                                        className="self-end w-[350px] bg-gray-200 rounded-3xl p-2 "
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
                                        <h1 className=" bg-gray-200 rounded-3xl p-2 ">
                                            {el.message}
                                        </h1>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <div className="flex h-10 mt-2 border-[1px] -p-2 ring-0 bg-white rounded-xl">
                        <input
                            type="text"
                            value={message}
                            placeholder="Write a message...
                            "
                            // placeholder="Please Fill Message"
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") refInput.current.click();
                            }}
                            className="flex-1  items-center relative rounded-xl"
                        />
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