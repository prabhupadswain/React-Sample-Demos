import React from 'react';
import UserInput from './UserInput';
import Movies from './Movies';

const LandingPage = () => {
  return (
    <div className='container'>
      <h1>Movies List</h1>
      <UserInput />
      <Movies />
    </div>
  );
};

export default LandingPage;
