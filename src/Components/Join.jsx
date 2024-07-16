import React, { useState } from 'react';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const handleJoinRoom = () => {
    
  };

  return (
    <div className="container join-room">
      <h2>Join Room</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter room code"
        value={roomCode}
        onChange={(e) => setRoomCode(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default Join;
