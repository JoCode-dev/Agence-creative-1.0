import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="app__header app__flex">
        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__header-squares"
        >
          <span className="app__header-squares-top" />
          <span className="app__header-squares-bottom" />
        </motion.div>

        <div className="app__header-main">
          <motion.img
            viewport={{ once: true }}
            whileInView={{ y: [-30, 0], opacity: [0, 1] }}
            srcSet={`${images?.agence_creative_ultra} 3200w, ${images?.agence_creative_desktop} 1600w, ${images?.agence_creative_ultra} 800w`}
            src={images?.agence_creative_desktop}
            alt="agence creative"
            loading="lazy"
            decoding="async"
          />
          <div className="app__header-hands-container">
            <motion.img
              viewport={{ once: true }}
              whileInView={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ duration: 1.3 }}
              srcSet={`${images.hands_ultra} 3200w, ${images.hands_desktop} 1600w, ${images.hands_mobile} 800w`}
              src={images?.hands_desktop}
              alt="JVC Communication"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <motion.div
          viewport={{ once: true }}
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="app__header-circles"
        >
          <span className="app__header-circles-item" />
        </motion.div>
      </div>
      <div className="app__header-quote">
        <div className="app__header-quote-text">
          <p>
            Qui travaille avec ses mains, sa tête et son coeur est un artiste
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 170.701">
          <path
            id="wave_3_"
            data-name="wave (3)"
            d="M0,288l35.6-5.3c35.467-5.7,107.067-15.7,177.733-48C284.4,203,356,149,426.667,149.3,497.733,149,569.333,203,640,218.7c71.067,16.3,142.667-5.7,213.333-21.4C924.4,181,996,171,1066.667,170.7c71.067.3,142.667,10.3,213.333,26.6,71.067,15.7,142.667,37.7,213.333,21.4C1564.4,203,1636,149,1706.667,154.7,1777.733,160,1849.333,224,1884,256l36,32v32H0Z"
            transform="translate(1920 320) rotate(180)"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
