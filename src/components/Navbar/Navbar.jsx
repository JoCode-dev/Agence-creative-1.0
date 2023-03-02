import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const NAVBAR_MENUS = [
  "L'Agence",
  "Portfolio",
  "Références",
  "Contacts",
  "OZ'NOV",
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img
            srcSet={`${images.logo_black_ultra} 3200w, ${images.logo_black_desktop} 1600w, ${images?.logo_black_mobile} 800w`}
            src={images?.logo_black_desktop}
            alt="logo JVC"
          />
        </div>

        <ul className="app__navbar-links">
          {NAVBAR_MENUS?.map((item) => (
            <li key={`link-${item}`} className="app__flex">
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4
            onClick={() => {
              setToggle(true);
            }}
          />

          {toggle === true ? (
            <motion.div
              whileInView={{ x: [40, 0] }}
              transition={{ duration: 0.4 }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {NAVBAR_MENUS?.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
