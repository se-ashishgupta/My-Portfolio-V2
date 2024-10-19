import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Home from "./pages/Home";
import Loader from "./components/layouts/Loader";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes />
        {/* <Loader /> */}
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
