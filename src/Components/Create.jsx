import React, { useState } from 'react';
import './Create.css';

const Create = () => {
  const [hostName, setHostName] = useState('');

  const handleCreateRoom = () => {
   
  };

  return (
    <div className="container create-room">
      <h2>Create Room</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={hostName}
        onChange={(e) => setHostName(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create</button>
    </div>
  );
};

export default Create;
