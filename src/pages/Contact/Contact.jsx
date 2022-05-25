import React, { useRef } from 'react';
import style from './Contact.module.scss';
import { motion } from "framer-motion";
import { pageAnimation, titleAnim2 } from "../../animations";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_skx0u4r', 'service_skx0u4r', form.current, '2OI223_ttaQqFbL-3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={style.contactPage}
      style={{ backgroundColor: "#fff" }}
    >
      <div className={style.contactBlocks}>
        <div className={style.info}>
          <motion.h2 variants={titleAnim2}>Social Links</motion.h2>
          <motion.div className={style.socLinks} variants={titleAnim2}>
            <a
              href="https://www.instagram.com/gvozd_oleg/"
              target="_blank"
              rel="noreferrer"
              className={style.sIcon}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100003291303734"
              target="_blank"
              rel="noreferrer"
              className={style.sIcon}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.linkedin.com/in/oleg-gvozd-20a16116a/"
              target="_blank"
              rel="noreferrer"
              className={style.sIcon}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/gavryk"
              target="_blank"
              rel="noreferrer"
              className={style.sIcon}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </motion.div>
        </div>
        <div className={style.info}>
          <motion.h2 variants={titleAnim2}>Get In Touch.</motion.h2>
          <motion.form variants={titleAnim2} ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="floatingInput"
                placeholder="Name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="company"
                id="floatingInput2"
                placeholder="Company"
              />
              <label htmlFor="floatingInput2">Company</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="floatingInput3"
                placeholder="Email"
              />
              <label htmlFor="floatingInput3">Email address</label>
            </div>
            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                name="message"
                placeholder="Leave a Message here"
                id="floatingTextarea4"
                style={{ height: `100px` }}
              ></textarea>
              <label htmlFor="floatingTextarea4">Message</label>
            </div>
            <input type="submit" value="Send" className="btn" />
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact