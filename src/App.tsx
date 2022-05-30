import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "component/login";
import Home from "component/home";

function App() {
  return (
    <div>
      <Routes>
        {/*<Route path={"/"} element={<Login />} />*/}
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
