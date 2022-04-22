import React from 'react';

const Movies = () => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src='...' className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>Vote</h5>
        <button type='button' class='btn btn-light'>
          Upvote
        </button>{' '}
        <button type='button' class='btn btn-light'>
          Downvote
        </button>
      </div>
    </div>
  );
};

export default Movies;
