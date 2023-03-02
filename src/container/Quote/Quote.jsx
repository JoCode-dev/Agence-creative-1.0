import React from "react";
import "./Quote.scss";

import { motion } from "framer-motion";

const Quote = () => {
  return (
    <motion.div
      className="app__quote app__flex"
      whileInView={{ y: [10, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
    >
      <div className="app__quote-box">
        <h3>
          "Il y a trois réponses possibles à une pièce de design : oui, non et
          wow !
        </h3>
        <h2>wow est ce que vous devez rechercher"</h2>

        <h5>Milton Glaser</h5>
      </div>
    </motion.div>
  );
};

export default Quote;
