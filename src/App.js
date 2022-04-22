import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import LandingPage from './components/Landing/LandingPage';
import VotingPage from './components/Voting/VotingPage';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='vote' element={<VotingPage />} />
      </Routes>
    </div>
  );
}

export default App;
