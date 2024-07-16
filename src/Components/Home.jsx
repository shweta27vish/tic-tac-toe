import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container home">
      <h1>Welcome to Tic-Tak-Toe</h1>
      <button onClick={() => navigate('/create')}>Create Room</button>
      <button onClick={() => navigate('/join')}>Join Room</button>
    </div>
  );
};

export default Home;
