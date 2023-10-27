import React from "react";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <span className="slogan"> Welcome to MeezGems</span>
      </div>

      {/* Text Heading*/}
      <div className="text-heading">
        <div>
          <span>Shape </span>
          <span>Your </span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>
        <div className="span">Me, Myself, and Gems!</div>
      </div>

      {/* Figures*/}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+978</span>
          <span>members joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>fitness programs</span>
        </div>
      </div>
      {/* Buttons*/}
      <div className="buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
