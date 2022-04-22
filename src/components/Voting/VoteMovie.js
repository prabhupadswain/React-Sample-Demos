import React from 'react';

const VoteMovie = () => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Movie Name</h5>
        <button type='button' className='btn btn-light'>
          Upvote
        </button>{' '}
        <button type='button' className='btn btn-light'>
          Downvote
        </button>
      </div>
    </div>
  );
};

export default VoteMovie;
