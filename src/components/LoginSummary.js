// import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginSummary = () => {
  const navigate=useNavigate()
    return(
      <>
      <div> you did login correct....</div>
      <button onClick={() => navigate(-1)}>Go back</button>
      
      </>
    )
  };
  
  export default LoginSummary;