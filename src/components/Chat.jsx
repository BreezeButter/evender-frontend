import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Chat() {
    const id = 1;
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [currentRoom, setCurrentRoom] = useState('room1'); // Set the initial room

    useEffect(() => {
        // Listen for incoming messages
        socket.on('chat message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    const joinRoom = (room) => {
        setCurrentRoom(room);
        socket.emit('join room', room);
    };

    const sendMessage = () => {
        socket.emit('chat message', { room: currentRoom, message });
        setMessage('');
    };

    return (
        <div>
            <h1>Current Room: {currentRoom}</h1>
            <button onClick={() => joinRoom('room1')}>Join Room 1</button>
            <button onClick={() => joinRoom('room2')}>Join Room 2</button>
            <button>Addroom</button>

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
