import React from 'react';
import UserInput from './UserInput';
import Movies from './Movies';

const LandingPage = () => {
  return (
    <div className='container'>
      <UserInput />
      <Movies />
    </div>
  );
};

export default LandingPage;
