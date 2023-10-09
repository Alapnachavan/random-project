
// import React from "react";
// import { BrowserRouter as Router, Route,  } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Form from "./components/Form";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
        
        
//           <Route path="/" exact component={Home} />
//           <Route path="/form" component={Form} />
       
       
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Form from "./components/Form";
import About from "./components/About";
import LoginSummary from "./components/LoginSummary";
import { Routes, Route } from "react-router-dom";
import './index.css';



function App() {
  return (
    <div>
      <h2> Wel-come to my app </h2>
      <Navbar/>
      <Login/>
      {/* <LoginSummary/> */}
      
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">From</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/LoginSummary" element={<LoginSummary/>}/>
      </Routes>
    </div>
  );
}

export default App;
