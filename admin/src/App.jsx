import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Home from "./pages/Home";

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
