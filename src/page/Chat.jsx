import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    getJoinEventByUserAsync,
    getChatByEventAsync,
} from "../features/Event/slice/eventSlice";
import { useRef } from "react";

const socket = io.connect("http://localhost:8888");
export default function Chat() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const roomId = useParams().id;
    const [currentRoom, setCurrentRoom] = useState(roomId);
    const ref = useRef();

    const userId = useSelector((state) => state.auth.user?.id);
    const joinEventByUser = useSelector((state) => state.event.joinEventByUser);
    const chats = useSelector((state) => state.event.chats);

    // console.log(userId);
    // console.log(chats);
    useEffect(() => {
        const fn = async () => {
            await dispatch(getJoinEventByUserAsync()).unwrap();
            await dispatch(getChatByEventAsync(currentRoom)).unwrap();
        };
        fn();
    }, [currentRoom]);

    useEffect(() => {
        setMessages(chats);
    }, [chats]);

    useEffect(() => {
        // socket.auth = { id: userId };

        socket.connect();

        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        socket.emit("joinRoom", currentRoom);
        // ref.current.scrollTop = ref.current.scrollHeight;
    }, []);

    const handleJoinRoom = async (roomId) => {
        // console.log(roomId);
        setCurrentRoom(roomId);
        // console.log("currentroom", currentRoom);
        socket.emit("joinRoom", roomId);
    };
    // console.log(chats);

    const sendMessage = () => {
        socket.emit("sendMessage", { room: currentRoom, message, userId });
        setMessages((prevMessages) => [...prevMessages, { userId, message }]);
        setMessage("");
        ref.current.scrollTop = ref.current.scrollHeight;
    };

    return (
        <div className="w-[1000px] m-auto mb-5 flex justify-center gap-5">
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
                    className="border border-black h-[340px] w-[750px] overflow-y-scroll flex flex-col gap-2 p-2"
                    ref={ref}
                >
                    {messages.map((el, index) => {
                        if (el.userId == userId) {
                            return (
                                <h1 key={index} className="self-end">
                                    {el.message}
                                </h1>
                            );
                        } else {
                            return (
                                <h1 key={index} className="self-start">
                                    {el.message}
                                </h1>
                            );
                        }
                    })}
                </div>
                <div className="flex h-10">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                    />
                    <button onClick={sendMessage} className="w-20">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

//#############################################################################

// import { io } from "socket.io-client";
// import { useState, useEffect } from "react";

// const socket = io.connect("http://localhost:8888");
// export default function Chat() {
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [currentRoom, setCurrentRoom] = useState("");
//     const eventRoomId = "room1";
//     const userId = "user1";

//     useEffect(() => {
//         socket.auth = { id: "user01" };

//         socket.connect();

//         socket.on("receiveMessage", (message) => {
//             setMessages((prevMessages) => [...prevMessages, message]);
//         });

//         return () => {
//             socket.disconnect();
//         };
//     }, []);

//     const joinRoom = (room) => {
//         setCurrentRoom(room);
//         socket.emit("joinRoom", room);
//     };

//     const sendMessage = () => {
//         socket.emit("sendMessage", { room: currentRoom, message });
//         setMessages((prevMessages) => [...prevMessages, message]);

//         setMessage("");
//     };

//     return (
//         <div>
//             <h1>Current Room: {currentRoom}</h1>
//             <button onClick={() => joinRoom("room1")}>Join Room 1</button>
//             <button onClick={() => joinRoom("room2")}>Join Room 2</button>

//             <ul>
//                 {messages.map((msg, index) => (
//                     <li key={index}>{msg}</li>
//                 ))}
//             </ul>
//             <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// }
