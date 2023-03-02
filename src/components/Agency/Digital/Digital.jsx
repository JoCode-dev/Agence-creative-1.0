import React from "react";
import "./Digital.scss";
import images from "../../../constants/images";
import { motion } from "framer-motion";

const Digital = () => {
  return (
    <div className="app__agency-digital app__flex">
      <motion.div
        className="app__agency-digital-image"
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.025,
        }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${images.digital_ultra} 3200w, ${images.digital_desktop} 1600w, ${images.digital_mobile} 800w`}
          />
          <img
            src={images?.digital_desktop}
            srcSet={`${images.digital_ultra} 3200w, ${images.digital_desktop} 1600w, ${images.digital_mobile} 800w`}
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
            loading="lazy"
            decoding="async"
            alt="JVC Com - Digital"
          />
        </picture>
      </motion.div>
      <div className="app__agency-digital-text">
        <div>
          <motion.div
            className="app__agency-digital-title"
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
          >
            <h1>DIGITAL</h1>
            <h2>DÉVELOPPEMENT WEB/MOBILE</h2>
          </motion.div>

          <ul>
            <motion.li
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              &gt; Site Web, blogs, vitrine, portfolio, e-commerce sur mesure{" "}
            </motion.li>
            <motion.li
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &gt; Applications WEB{" "}
            </motion.li>
            <motion.li
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              &gt; Progiciels - SaaS - Logiciel de Gestion
            </motion.li>
            <motion.li
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              &gt; Applications mobiles iOS et Android
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Digital;
