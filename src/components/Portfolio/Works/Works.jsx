import React, { useState, useEffect } from "react";
import "./Works.scss";

import MasonryLayout from "../Masonry/MasonryLayout";
import { motion } from "framer-motion";

import { client } from "../../../utils/client";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Tout") {
        setFilterWork(works);
      } else setFilterWork(works?.filter((work) => work?.tags?.includes(item)));
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  return (
    <div className="app__works">
      <div className="app__work-filter">
        {["Tout", "Design 3D", "Graphisme & Publicité", "Digital"]?.map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <MasonryLayout items={filterWork} />
      </motion.div>

      <motion.div
        className="app__work-portfolio-name"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {activeFilter}
      </motion.div>
    </div>
  );
};

export default Works;
