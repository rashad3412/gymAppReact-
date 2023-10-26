import React from "react";
import Navbar from "./components/Navbar";
import "./components/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FitnessPage from "./components/FitnessPage";
import TrackerPage from "./components/TrackerPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/fitnesspage" element={<FitnessPage />}></Route>
          <Route path="/trackerpage" element={<TrackerPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
