import React, { useRef,useState } from "react";
// const Searchbar = () => {
//     return (
//       <div >alpana</div>
//     );
//   }
  
//   export default Searchbar;


function Search(){
  const refElement =useRef("");
  const [name,setName]= useState("alpana")
  console.log(refElement)
  function Reset(){
    setName("")
  }
  return (
    <>
    <h1>learning useref</h1>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
    <button onClick={Reset}>Reset</button>
    </>
  );
}
export default Search;