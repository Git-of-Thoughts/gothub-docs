import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ClientIcons from './components/ClientIcons';
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#555555" type="cobweb" bg={true} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

