import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "component/login";
import Home from "component/home";

function App() {
  return (
    <div>
      2222这是写给她的一封情书
      <Login />
      <Routes>
        {/*<Route path={"/"} element={<Login />} />*/}
        {/*<Route path={"/home"} element={<Home />} />*/}
      </Routes>
    </div>
  );
}

export default App;
