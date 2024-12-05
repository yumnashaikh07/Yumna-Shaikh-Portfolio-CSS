import style from "../styles/servicecard.module.css"
import React from "react";
import {
  FaServer,
  FaGlobe,
  FaLightbulb,
  FaBullhorn,
  FaPaintBrush,
  FaSearch,
} from "react-icons/fa";
export default function Servicecard() {
  return (
    <main className={style.main}>
      <h1 className={style.h1}>
        <strong>SERVICES</strong>
      </h1>
      <section className={style.section}>
        <div className={style.div1}>
          <div className={style.div2}>
           
            <div className={style.carddiv1}>
              <FaPaintBrush />
            </div>
          </div>
          <h2 className={style.h2}>UI/UX Design</h2>
          <p className={style.p}>
            I create intuitive interfaces that
            <span className={style.span}> Enhance User Experience</span> and
            navigation, ensuring they align perfectly with your brand for
            maximum engagement.
          </p>
          <div className={style.divider}></div>
        </div>

        <div className={style.div1}>
          <div className={style.div2}>
            <div className={style.carddiv1}>
              <FaGlobe />
            </div>
          </div>
          <h2 className={style.h2}>
            Website Development
          </h2>
          <p className={style.p}>
            I build <span className={style.span}>Custom Websites</span> tailored
            to your needs, combining functionality with aesthetic design to
            elevate your online presence.
          </p>
          <div className={style.divider}></div>
        </div>

        <div className={style.div1}>
          <div className={style.div2}>
            <div className={style.carddiv1}>
              <FaLightbulb />
            </div>
          </div>
          <h2 className={style.h2}>
            Consultation Services
          </h2>
          <p className={style.p}>
            I provide expert guidance on{" "}
            <span className={style.span}> Web Strategy</span> and
            <span className={style.span}> Digital Marketing</span> to effectively
            achieve your business goals and maximize growth potential.
          </p>
          <div className={style.divider}></div>
        </div>

        <div className={style.div1}>
          <div className={style.div2}>
            <div className={style.carddiv1}>
              <FaSearch />
            </div>
          </div>
          <h2 className={style.h2}>SEO Service</h2>
          <p className={style.p}>
            I offer tailored SEO services to enhance your online presence and
            <span className={style.span}> drive organic traffic</span> through
            keyword research, on-page optimization, and content strategies.
          </p>
          <div className={style.divider}></div>
        </div>

        <div className={style.div1}>
          <div className={style.div2}>
            <div className={style.carddiv1}>
              <FaBullhorn />
            </div>
          </div>
          <h2 className={style.h2}>
            Social Integration
          </h2>
          <p className={style.p}>
            I design high-converting landing pages that capture attention,
            engage users, and drive actionable results for your
            <span className={style.span}> business objectives</span>.
          </p>
          <div className={style.divider}></div>
        </div>

        <div className={style.div1}>
          <div className={style.div2}>
            <div className={style.carddiv1}>
              <FaServer />
            </div>
          </div>
          <h2 className={style.h2}>
            Backend Development
          </h2>
          <p className={style.p}>
            I offer <span className={style.span}>Backend Development</span> services 
            Using APIs I ensure seamless communication between your frontend and
            backend. 
          </p>
          <div className={style.divider}></div>
        </div>
      </section>
    </main>
  );
}