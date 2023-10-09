
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =true;

    if (isValid) {
      navigate('/LoginSummary');
    } else {
      setErrorMessage('Your information is incorrect. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter user name" />

          <br /> <br />
          <input type=",text,number" placeholder="Enter user id" />
          <br /> <br />
          <input type="number" placeholder="Enter the User Password" />
          <br /> <br />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Form;
