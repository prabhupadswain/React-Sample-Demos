import React from 'react';

const UserInput = () => {
  return (
    <form>
      <div class='row mb-3'>
        <label for='userName' class='col-sm-2 col-form-label'>
          Full Name
        </label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='userName' />
        </div>
      </div>
      <div class='row mb-3'>
        <label for='userEmail' class='col-sm-2 col-form-label'>
          Email
        </label>
        <div class='col-sm-10'>
          <input type='email' class='form-control' id='userEmail' />
        </div>
      </div>
      <div class='row mb-3'>
        <label for='shareWithEmail' class='col-sm-2 col-form-label'>
          Share with
        </label>
        <div class='col-sm-10'>
          <input type='password' class='form-control' id='shareWithEmail' />
        </div>
      </div>
    </form>
  );
};

export default UserInput;
