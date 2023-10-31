import React from "react";
import fitnessPic1 from "../assets/fitnessPic1.jpg";
import fitnessPic2 from "../assets/fitnessPic2.jpg";
import fitnessPic3 from "../assets/fitnessPic3.jpg";
import fitnessPic4 from "../assets/fitnessPic4.jpg";
import fitnessVideo from "../assets/fitnessVideo.mp4";

const FitnessPage = () => {
  return (
    <section className="fitness">
      <div>
        <div>
          <div className="fitness-text">MeezGems</div>
        </div>
        <div className="fitness-video">
          <video
            src={fitnessVideo}
            autoPlay
            loop
            muted
            width={"500px"}
            height={"500px"}
          ></video>
        </div>
        <div className="fitness-pics">
          <div className="fitness-pics">
            <img src={fitnessPic1} alt="fitnessPic1" />

            <img src={fitnessPic2} alt="fitnessPic1" />

            <img src={fitnessPic3} alt="fitnessPic1" />

            <img
              src={fitnessPic4}
              alt="fitnessPic1"
              width={"152"}
              height={"226.93"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessPage;
