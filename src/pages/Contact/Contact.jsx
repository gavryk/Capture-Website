import React, { useRef } from 'react';
import style from './Contact.module.scss';
import { motion } from "framer-motion";
import { pageAnimation } from "../../animations";
import emailjs from "@emailjs/browser";

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
      style={{backgroundColor: '#fff'}}
    >
      <div className={style.contactBlocks}>
        <div className={style.info}>
          <h2>Social Links</h2>
        </div>
        <div className={style.info}>
          <h2>Contact Form</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="Name"/>
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput2" placeholder="Company"/>
              <label htmlFor="floatingInput2">Company</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput3" placeholder="Email"/>
              <label htmlFor="floatingInput3">Email address</label>
            </div>
            <div className="form-floating mb-4">
              <textarea className="form-control" placeholder="Leave a Message here" id="floatingTextarea4" style={{height: `100px`}}></textarea>
              <label htmlFor="floatingTextarea4">Message</label>
            </div>
            <input type="submit" value="Send" className='btn' />
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact