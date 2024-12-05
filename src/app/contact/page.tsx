"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import style from "../../styles/contact.module.css"

export default function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("Cp1U6sjzrRcIQYZuJ"); // Replace with your actual public key
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_umm79sr",  
        "template_4gvmrak",  // service_3gls27k
        templateParams
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send message:", error);
    }

    setformData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className={style.main}>
      <h1 className={style.h1}>
        CONTACT HERE
        <AiOutlineArrowDown className={style.icon}/>
      </h1>
      <div className={style.div1}>
        <div className={style.div2}>
          <div className={style.div3}>
            <h2 className={style.h2}>Send Message Here</h2>
            {submitted && (
              <p className={style.p}>Message sent successfully!</p>
            )}
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label htmlFor="name" className={style.label}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={style.input}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={style.label}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={style.input}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className={style.label}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={style.input}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className={style.label}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={style.input}
                  rows={4}
                  required
                />
              </div>
              <button
                className={style.button}
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className={style.divsection2}>
            <h1 className={style.divsection2h1}>Reach Out Here</h1>
            <div className={style.divsection2divider}></div>
            <p className={style.divsection2p}>I am Open for Work or any Suggestions!</p>
            <ul className={style.divsection2ul}>
              <li className={style.divsection2li}>
                <FaPhone className={style.divsection2phone} size={27}/>
                <span className={style.divsection2phonespan1}>Phone:</span>
                <span className={style.divsection2phonespan2}>
                  +923132480307
                </span>
              </li>
              <li className={style.divsection2li}>
                <FaEnvelope className={style.divsection2email}size={27} />
                <span className={style.divsection2phonespan1}>Email:</span>
                <span className={style.divsection2phonespan2}>
                yumnashaiykh@gmail.com
                </span>
              </li>
              <li className={style.divsection2li}>
                <FaLinkedin className={style.divsection2linkedin} size={27}/>
                <span className={style.divsection2phonespan1}>LinkedIn:</span>
                <span className={style.divsection2linkedinspan2}>
                  <a
                    href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className={style.divsection2linkedinlink}
                  >
                    linkedin.com/yumna-shaikh
                  </a>
                </span>
              </li>
              <li className={style.divsection2li}>
                <FaGithub className={style.divsection2github}size={27} />
                <span className={style.divsection2phonespan1}>Github:</span>
                <span className={style.divsection2githubspan2}>
                  <a
                    href="https://github.com/yumnashaikh07"
                    className={style.divsection2githublink}>
                    https://github.com/yumnashaikh07
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}