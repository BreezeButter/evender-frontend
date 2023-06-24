// import { useState, useEffect } from "react";
// import { io } from "socket.io-client";

// const socket = io.connect("http://localhost:8888");
// export default function Chat() {
//     const [message, setMessage] = useState("");
//     const [messages, setMessages] = useState([]);
//     const [currentRoom, setCurrentRoom] = useState(""); // Set the initial room

//     useEffect(() => {
//         socket.auth = { id: "user01" };

//         socket.connect();
//         // Listen for incoming messages

//         socket.on("receiveMessage", (message) => {
//             setMessages((prevMessages) => [...prevMessages, message]);
//         });
//         // Clean up the socket connection on unmount
//         return () => {
//             socket.disconnect();
//         };
//     }, []);
//     const joinRoom = (room) => {
//         setCurrentRoom(room);
//         socket.emit("join_room", room);
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
