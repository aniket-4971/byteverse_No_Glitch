import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return <>
     <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
  </>
}

export default App;
