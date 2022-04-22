import React from 'react';

const UserInput = () => {
  return (
    <form>
      <div className='row mb-3'>
        <label for='userName' className='col-sm-2 col-form-label'>
          Full Name
        </label>
        <div className='col-sm-10'>
          <input type='text' className='form-control' id='userName' />
        </div>
      </div>
      <div className='row mb-3'>
        <label for='userEmail' className='col-sm-2 col-form-label'>
          Email
        </label>
        <div className='col-sm-10'>
          <input type='email' className='form-control' id='userEmail' />
        </div>
      </div>
      <div className='row mb-3'>
        <label for='shareWithEmail' className='col-sm-2 col-form-label'>
          Share with
        </label>
        <div className='col-sm-10'>
          <input type='password' className='form-control' id='shareWithEmail' />
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-sm-12'>
          <button type='submit' className='btn btn-warning col-sm-8'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserInput;
