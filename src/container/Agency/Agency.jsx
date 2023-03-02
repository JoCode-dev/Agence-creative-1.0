import React from "react";
import "./Agency.scss";
import { Home, GraphPub, Digital, Design3D } from "../../components/Agency";

const Agency = () => {
  return (
    <div className="app__agency app__flex" id="L'Agence">
      <div className="app__agency-title-top app__flex">
        <h1>l'Agence</h1>
      </div>

      <div className="app__agency-blocks app__flex">
        <Home />
        <GraphPub />
        <Digital />
        <Design3D />
      </div>

      <div className="app__agency-title-bottom app__flex">
        <h1>l'Agence</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 170.701">
          <path
            id="wave_3_"
            data-name="wave (3)"
            d="M0,288l35.6-5.3c35.467-5.7,107.067-15.7,177.733-48C284.4,203,356,149,426.667,149.3,497.733,149,569.333,203,640,218.7c71.067,16.3,142.667-5.7,213.333-21.4C924.4,181,996,171,1066.667,170.7c71.067.3,142.667,10.3,213.333,26.6,71.067,15.7,142.667,37.7,213.333,21.4C1564.4,203,1636,149,1706.667,154.7,1777.733,160,1849.333,224,1884,256l36,32v32H0Z"
            transform="translate(1920 320) rotate(180)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Agency;
