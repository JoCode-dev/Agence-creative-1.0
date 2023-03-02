import React from "react";
import "./Design3D.scss";
import images from "../../../constants/images";
import { motion } from "framer-motion";

const Design3D = () => {
  return (
    <div className="app__agency-design3D app__flex">
      <div className="app__agency-design3D-text">
        <div>
          <motion.div
            className="app__agency-design3D-title"
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
          >
            <h1>DESIGN 3D</h1>
            <h2>Modélisation - Simulation</h2>
          </motion.div>

          <ul>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                &gt; Design de stands
              </motion.h3>
              <motion.p
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Conception et prévisualisation de tous vos projets de stands en
                3D tel que les stands pour salons, les stands d’expositions, les
                pavillons ou les bulles de vente.
              </motion.p>
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.h3
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                &gt; Évènementiel
              </motion.h3>
              <motion.p
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Prévisualisez tous vos projets événementiels en 3D tel que les
                conventions et séminaires d’entreprises, les forums, les
                lancements de produits, les galas, cocktails… Des images
                d’ambiance de qualité.
              </motion.p>
            </motion.li>
            <motion.li
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <motion.h3
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                &gt; Immobilier
              </motion.h3>
              <motion.p
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Communiquez sur vos projets immobiliers avant leur construction
                ou leur rénovation . Perspectives extérieures et intérieures,
                axonométries…
              </motion.p>
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.div
        className="app__agency-design3D-image"
        whileInView={{ opacity: [0, 1] }}
        viewport={{ once: true }}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${images.design3D_ultra} 3200w, ${images.design3D_desktop} 1600w, ${images.design3D_mobile} 800w`}
          />
          <img
            src={images?.design3D_desktop}
            srcSet={`${images.design3D_ultra} 3200w, ${images.design3D_desktop} 1600w, ${images.design3D_mobile} 800w`}
            sizes="(max-width: 800px) 100vw, 50vw"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
            loading="lazy"
            decoding="async"
            alt="JVC Com - Design 3D"
          />
        </picture>
      </motion.div>
    </div>
  );
};

export default Design3D;
