import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Loader from "./components/layouts/loader/Loader";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
