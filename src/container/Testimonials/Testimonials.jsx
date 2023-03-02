import React, { useEffect } from "react";
import { useState } from "react";
import "./Testimonials.scss";

import { motion } from "framer-motion";

import { client, urlFor } from "../../utils/client";

const Testimonials = () => {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    const query = '*[_type == "partner"]';
    client.fetch(query).then((data) => {
      setRefs(data);
    });
  }, []);
  return (
    <motion.div
      whileInView={{ y: [90, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      className="app__testimonials app__flex"
      id="Références"
    >
      <div className="app__testimonials-title">
        <h1>Ils nous ont fait confiance...</h1>
      </div>

      <div className="app__testimonials-refs">
        {refs?.map((item, index) => (
          <div className="app__testimonials-refs-item" key={index}>
            <picture>
              <source
                type="image/png"
                src={urlFor(item?.imgUrl)}
                alt={item?.title}
              />
              <img
                src={urlFor(item?.imgUrl)}
                alt={item?.title}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                }}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
