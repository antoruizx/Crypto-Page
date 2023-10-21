import React, { useRef } from 'react';
import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0nvac8i', 'template_nos9a0j', form.current, 'G7FPGLf5_C4hkZ4f4')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, 
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <form method="post" ref={form} onSubmit={sendEmail}>
      <h1>Contact <span>Here</span></h1>
      <input type="text" name="user_name" placeholder="Enter name" />
      <input type="email" name="user_email" placeholder="example@gmail.com" />
      <input type="phone" name="user_phone" placeholder="+549" />
      <textarea name="message" id="" cols="30" rows="10" placeholder="Type here..." />
      <button type="submit" >Send</button>    
      </form>
  );
};