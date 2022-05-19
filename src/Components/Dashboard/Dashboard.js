import React from "react";
import "./Dashboard.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Dashboard(props) {
  return (
    <div className="dashboard" id="dashboard">
      <div className="dashboard-title">
        <span>Good day, Bature Badamasi 😎</span>
      </div>
      <div className="dashboard-slider">
        <Carousel axis="horizontal">
          <div>
            <img src="../../assets/slider.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="../../assets/slider.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="../../assets/slider.jpg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="dashboard-charts"></div>
      <div className="dashboard-graphs"></div>
    </div>
  );
}

export default Dashboard;
