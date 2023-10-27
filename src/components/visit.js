import React from "react";
import { useContext } from "react";
import { userContext } from "../App";
// import '/App.css'



function Visit() {
  const user=useContext(userContext)
  return (
    <div>
      <h2>{user}</h2>
      <p>Welcome to our visit page. Here, you can learn more about our location and how to reach us.</p>
    </div>
  );
}

export default Visit;