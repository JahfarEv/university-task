import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
