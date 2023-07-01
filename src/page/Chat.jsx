import { LeftIcon } from "../icons";
// import Footer from "../layouts/Footer";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    return (
        <div className="border-t border-gray-300 flex flex-row">
            <div className="flex flex-col mt-10 gap-3">
                {joinEventByUser.map((el, index) => (
                    <button
                        key={index}
                        onClick={() => handleJoinRoom(el.eventId)}
                        className="border border-black p-3 rounded"
                    >
                        eventRoom: {el.eventId}
                    </button>
                ))}
            </div>
            <div>
                <h1 className="font-semibold text-xl">
                    Event Room: {currentRoom}
                </h1>

                <div
                    className="rounded h-[340px] w-[750px] overflow-y-scroll flex flex-col gap-3 p-2 bg-gray-300"
                    ref={ref}
                >
                    {messages.map((el, index) => {
                        if (el.userId == user.id) {
                            return (
                                <h1
                                    key={index}
                                    className="self-end w-[350px] bg-white rounded-3xl p-2"
                                >
                                    {el.message}
                                </h1>
                            );
                        } else {
                            return (
                                <div
                                    className="self-start w-[350px] flex flex-col gap-1"
                                    key={index}
                                >
                                    <div className="flex gap-1">
                                        <img
                                            src={el.User?.image || el.image}
                                            alt=""
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <p className="text-xs self-center">
                                            {el.User?.firstName || el.firstName}
                                        </p>
                                    </div>
                                    <h1 className=" bg-white rounded-3xl p-2">
                                        {el.message}
                                    </h1>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="flex h-10">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === "Enter") refInput.current.click();
                        }}
                        className="flex-1"
                    />
                    <button
                        onClick={sendMessage}
                        className="w-20 bg-gray-500 text-white"
                        ref={refInput}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
