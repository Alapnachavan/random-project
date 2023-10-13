
import React from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const LoginSummary = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <h1>You did it! 🎉</h1>
      <p>Congratulations on a successful login.</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default LoginSummary;
