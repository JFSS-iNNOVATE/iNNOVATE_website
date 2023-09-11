import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import Home from './pages/Home'
import Forum from './pages/Forum'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Resources from './pages/Resources';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App;