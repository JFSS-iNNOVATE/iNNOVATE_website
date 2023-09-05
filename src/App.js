import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}



export default App;
