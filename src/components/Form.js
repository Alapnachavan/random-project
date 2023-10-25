
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const userId = e.target.userId.value;
    const password = e.target.password.value;

    // Add your custom validation logic here
    let isValid = true;

    if (!username || !userId || !password) {
      isValid = false;
    }
   
    if (isValid) {
      navigate('/LoginSummary');
    } else {
      setErrorMessage('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <img
          className="movie-image"
        />
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input className="form-input" type="text" placeholder="Enter username" name="username" />
          <input className="form-input" type="text" placeholder="Enter user id" name="userId" />
          <input className="form-input" type="password" placeholder="Enter the User Password" name="password" />
          <button className="form-button" type="submit">Login</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Form;
