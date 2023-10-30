import React from "react";
import gymLogo from "../assets/gymLogo.png";

const Home = () => {
  const HandleStart = () => {
    // Demo for Handle Start Button
    console.log("Get Started");
  };

  const HandleLearnMore = () => {
    // Demo for Handle Learn Button
    console.log("Learn More");
  };

  return (
    <div>
      <div className="home">
        <div>
          <span className="slogan"> Welcome to MeezGems</span>
        </div>
      </div>
      <div>
        {/* Text Heading*/}

        <div>
          <div className="text-heading">
            <div>
              <span className="span2">Shape </span>
              <span className="span2">Your </span>
            </div>
            <div>
              <span className="span2">Ideal Body</span>
            </div>
            <div className="span">Me, Myself, and Gems!</div>
          </div>
        </div>
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
      <button className="btn" onClick={HandleStart}>
        Get Started
      </button>
      <button className="btn" onClick={HandleLearnMore}>
        Learn More
      </button>
      <div>
        {" "}
        <div className="lorem">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
            nobis minima vero quisquam nemo rem non pariatur, doloremque ex
            aperiam officiis tenetur incidunt harum, recusandae dolorem magnam
            soluta fugiat placeat iste ea quasi reprehenderit? Fugiat iste
            laboriosam quasi nobis temporibus ab asperiores eligendi
            accusantium. Sunt exercitationem quos explicabo minima soluta
            temporibus cum, reiciendis laborum odit! Sunt adipisci quis
            quibusdam libero? Nobis enim veniam sit?
          </span>
        </div>
      </div>
      <div className="gym-logo">
        <div>
          <img src={gymLogo} alt="gymLogo" className="gym-pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
