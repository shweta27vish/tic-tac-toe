import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { TicTacToe } from './Components/TicTacToe/TicTacToe';
import Home from './Components/Home';
import Create from './Components/Create';
import Join from './Components/Join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/join" element={<Join />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;





// import './App.css';

// import { TicTacToe } from './Components/TicTacToe/TicTacToe';

// function App() {
//   return (
//     <div>
//       <TicTacToe/>
      
//     </div>
//   );
// }

// export default App;
