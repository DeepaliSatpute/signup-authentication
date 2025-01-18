import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


