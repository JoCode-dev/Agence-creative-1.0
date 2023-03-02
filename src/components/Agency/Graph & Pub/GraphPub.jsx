import React from "react";
import "./GraphPub.scss";
import images from "../../../constants/images";
import { motion } from "framer-motion";

const GraphPub = () => {
  return (
    <div className="app__agency-GraphPub app__flex">
      <div className="app__agency-GraphPub-text">
        <div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="app__agency-GraphPub-title"
          >
            <h1>GRAPHISME</h1>
            <h2>ET PUBLICITÉ</h2>

            <h3>Une vision média omnicanale pour vos projets</h3>
            <h3>Votre projet prendra forme grâce au design graphique.</h3>
          </motion.div>

          <ul>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              &gt; Charte Graphique
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {" "}
              &gt; Logotype
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              &gt; Magazine / Plaquette commerciale
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {" "}
              &gt; Kakémono / Bâches
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              &gt; Etc...
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.div
        className="app__agency-GraphPub-image"
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.025,
        }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${images.GraphPub_ultra} 3200w, ${images.GraphPub_desktop} 1600w, ${images.GraphPub_mobile} 800w`}
          />
          <img
            src={images?.GraphPub_desktop}
            srcSet={`${images.GraphPub_ultra} 3200w, ${images.GraphPub_desktop} 1600w, ${images.GraphPub_mobile} 800w`}
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
            loading="lazy"
            decoding="async"
            alt="JVC Com - Graphisme & Publicité"
          />
        </picture>
      </motion.div>
    </div>
  );
};

export default GraphPub;
