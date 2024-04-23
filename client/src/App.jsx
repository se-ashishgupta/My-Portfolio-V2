import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import AppRoutes from "./routes/Routes";

// Animation Library
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <AppRoutes />

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#07a8ad",
        }}
        outerStyle={{
          border: "3px solid #07a8ad",
        }}
      /> */}
    </Router>
  );
};

export default App;
