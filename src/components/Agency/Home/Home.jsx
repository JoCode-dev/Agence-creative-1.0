import React from "react";
import "./Home.scss";
import images from "../../../constants/images";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="app__agency-home app__flex">
      <motion.div
        className="app__agency-home-image"
        viewport={{ once: true }}
        whileInView={{ opacity: [0, 1] }}
        transition={{
          staggerChildren: 0.025,
        }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${images.Home_ultra} 3200w, ${images.Home_desktop} 1600w, ${images.Home_mobile} 800w`}
          />
          <img
            src={images?.Home_desktop}
            srcSet={`${images.Home_ultra} 3200w, ${images.Home_desktop} 1600w, ${images.Home_mobile} 800w`}
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
            loading="lazy"
            decoding="async"
            alt="JVC Com - Agence créative"
          />
        </picture>
      </motion.div>
      <div className="app__agency-home-text">
        <div>
          <motion.h1
            viewport={{ once: true }}
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Une Agence de publicité qui vous écoute
          </motion.h1>
          <motion.p viewport={{ once: true }} whileInView={{ x: [-100, 0] }}>
            Nous comprenons vos envies et concevons ensemble des stratégies
            adaptées pour La réalisation de votre vision
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
