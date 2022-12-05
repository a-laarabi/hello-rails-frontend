import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Message from './Components/Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
