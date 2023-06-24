import { io } from "socket.io-client";
import { useState, useEffect } from "react";

const socket = io.connect("http://localhost:8888");
export default function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [currentRoom, setCurrentRoom] = useState("");
    const eventRoomId = "room1";
    const userId = "user1";
    useEffect(() => {
        socket.auth = { id: "user01" };

        socket.connect();

        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const joinRoom = (room) => {
        setCurrentRoom(room);
        socket.emit("joinRoom", room);
    };

    const sendMessage = () => {
        socket.emit("sendMessage", { room: currentRoom, message });
        setMessages((prevMessages) => [...prevMessages, message]);

        setMessage("");
    };

    return (
        <div>
            <h1>Current Room: {currentRoom}</h1>
            <button onClick={() => joinRoom("room1")}>Join Room 1</button>
            <button onClick={() => joinRoom("room2")}>Join Room 2</button>

            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
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
