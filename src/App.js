import React from "react";
// import Navbar from "./components/Navbar";
// import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
