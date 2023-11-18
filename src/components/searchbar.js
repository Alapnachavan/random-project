// import React, { useRef,useState } from "react";
// const Searchbar = () => {
//     return (
//       <div >alpana</div>
//     );
//   }
  
// //   export default Searchbar;


// function Search(){
//   const refElement =useRef("");
//   const [name,setName]= useState("alpana")
//   console.log(refElement)
//   function Reset(){
//     setName("")
//   }
//   return (
//     <>
//     <h1>learning useref</h1>
//     <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
//     <button onClick={Reset}>Reset</button>
//     </>
//   );
// }
// export default Search;


import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Wrapper = styled.section`
  .container {
    margin-top: 6rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column; // Typo: should be "flex-direction" instead of "flex-derection"
        gap: 3rem;

        input[type="submit"] { // Typo: Use double quotes around "submit"
          cursor: pointer;
          transition: all 0.2s;
        }
      }
    }
  }
`;

const Track = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free To Contact Us 🤗</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.951573204838!2d77.69658849584185!3d12.860198367839084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d18ecbd4f03%3A0x81d0d93b72688ac3!2sHuskuru%2C%20Karnataka%20560099!5e0!3m2!1sen!2sin!4v1698765217988!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form // Corrected: Changed "from" to "form"
            action="https://formspree.io/f/mrgwdgob"
            method="POST"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              style={{ width: "400px", height: "70px" }}
              required
            />
            <br></br>
            <input
              type="email"
              name="Email"
              style={{ width: "400px", height: "70px" }} 
              placeholder="Email"
              autoComplete="off"
              required
            />
            <br></br>
            <textarea
              name="message"
              style={{ width: "400px", height: "70px" }}
              autoComplete="off"
              required
            ></textarea>
            <br></br>
            <Button variant="contained" endIcon={<SendIcon />}>Submit</Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Track;
