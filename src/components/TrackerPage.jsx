import React, { useState } from "react";

const TrackerPage = () => {
  const [tracker, setTracker] = useState("");
  const handleChange = (event) => {
    setTracker(event.target.value);
  };
  return (
    <section className="tracker-section">
      <div className="tracker-container">
        <form className="tracker-content">
          <label htmlFor="">
            Tracker Info:
            <input type="text" value={tracker} onChange={handleChange} />
          </label>
          <p> Info:{tracker}</p>
        </form>
      </div>
    </section>
  );
};

export default TrackerPage;
