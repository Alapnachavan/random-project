
import React,{createContext} from "react";
// import React from "react";
// import { RMobiledata } from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/About";
import LoginSummary from "./components/LoginSummary";
import { Routes, Route } from "react-router-dom";
import Visit from './components/visit';
import './index.css';
import Cardinfo from "./components/Home";
import Search from "./components/searchbar";
export const userContext=createContext()
// import Search from "./components/searchbar";
 


function App() {
  return (
    <div>
      <Navbar/>
      <Login/>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/About" element={<About  colour="white"/>}/>
        <Route path="/LoginSummary" element={<LoginSummary/>}/>
        <Route path= "/CardInfo" element={<Cardinfo/>}/>
        <Route path="/visit" element={<Visit/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<Search/>}/>
      </Routes>
      <userContext.Provider value={"alpana"}>
         {/* <Visit/> */}
      </userContext.Provider>
       {/* <Visit/> */}
      </div>
    
  );
} 

export default App;
