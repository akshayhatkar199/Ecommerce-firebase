import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import RegisterComplete from "./Pages/auth/RegisterComplete";
import RequireAuth from "./components/Requireauth";

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registe/complete" element={<RegisterComplete />} />
      </Routes>
    </>
  );
}

export default App;
