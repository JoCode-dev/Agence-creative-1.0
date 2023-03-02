import React from "react";
import "./Portfolio.scss";

import images from "../../constants/images";

import Works from "../../components/Portfolio/Works/Works";

const Portfolio = () => {
  return (
    <div className="app__portfolio app__flex" id="Portfolio">
      <div className="app__portfolio-masonry">
        <div className="app__portfolio-masonry-header">
          <img
            srcSet={`${images?.logo_portfolio_ultra} 3200w, ${images?.logo_portfolio_desktop} 1600w, ${images?.logo_portfolio_mobile} 800w`}
            src={images?.logo_portfolio_desktop}
            alt="JVC Communication"
          />

          <h1>Portfolio</h1>
        </div>

        <Works />
      </div>
    </div>
  );
};

export default Portfolio;
