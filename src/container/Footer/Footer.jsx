import React, { useState } from "react";
import "./Footer.scss";

import { HiMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";

import { motion } from "framer-motion";

import { client } from "../../utils/client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMail = () => {
    window.open("mailto:hello@jvc-com.africa", "_blank");
  };

  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ y: [30, 0], opacity: [0, 1] }}
      id="Contacts"
      className="app__contact app__flex"
    >
      <div className="app__contact-head app__flex">
        <h1>Intéressé ? Travaillons ensemble 😉</h1>
      </div>

      <div className="app__contact-btns">
        <motion.div
          viewport={{ once: true }}
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="app__contact-mail-btn"
        >
          <div className="app__contact-image">
            <HiMail />
          </div>
          <div className="app__contact-infos" onClick={sendMail}>
            <h4>Envoyer un e-mail</h4>
            <h4>hello@jvc-com.africa</h4>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          whileInView={{ y: [30, 0], opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          className="app__contact-contact"
        >
          <div className="app__contact-image">
            <IoIosCall />
          </div>
          <div className="app__contact-infos">
            <h4>Prendre un rendez-vous</h4>
            <h4>
              +225 07 57 09 31 77 <br />
              +225 07 79 37 32 09
            </h4>
          </div>
        </motion.div>
      </div>

      {!isFormSubmitted ? (
        <>
          <div className="app__contact-form app__flex">
            <div className="app__flex">
              <input
                type="text"
                className="p-text"
                placeholder="Votre nom"
                name={name}
                value={name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                className="p-text"
                placeholder="Votre email"
                name={email}
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Votre message ..."
                value={message}
                className="p-text"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button className="p-text" type="button" onClick={handleSubmit}>
              {loading ? "Envoi..." : "Envoyer un message"}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h3 className="head-text">Merci à vous! Osons innover ensemble.</h3>
        </div>
      )}

      <div className="app__footer app__flex">
        <h5>All rights reserved - JVC COMMUNICATION 2022 ©</h5>
      </div>
    </motion.div>
  );
};

export default Footer;
