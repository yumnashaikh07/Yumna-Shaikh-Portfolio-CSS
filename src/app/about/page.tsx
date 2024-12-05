import Image from "next/image";
import styles from "../../styles/about.module.css"
function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>
        DISCOVER:
      </h1>

      <section className={styles.section}>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <h2 className={styles.h2}>MY JOURNEY:</h2>
            <p className={styles.p}>
              My journey as a{" "}
              <span className={styles.span}>Web Developer</span> began in{" "}
              <span className={styles.span}>2023</span>, balancing my time as
              a full-time student and part-time{" "}
              <span className={styles.span}>Airbnb co-host</span>. This unique
              experience has provided valuable insights into customer service
              and the importance of a strong online presence.
            </p>
            <p className={styles.p2}>
              What sets me apart is my creative mindset and keen eye for detail.
              I believe that even the smallest elements like layout, color
              scheme, and typography can significantly impact user experience.
              My strong design sense helps me create websites that are both
              engaging and easy to navigate, ensuring a seamless experience for
              visitors.
            </p>
            <p className={styles.p2}>
              I am passionate about using my skills to help businesses elevate
              their online presence. Whether you are a startup needing a fresh
              website or an established brand seeking a redesign, I am dedicated
              to turning your vision into reality.
            </p>
            <p className={styles.p2}>
              Let&apos;s connect and explore how we can collaborate to enhance your
              business through impactful web development!
            </p>
          </div>
          <div>
            <Image
              src={"/images/Abouttt.jpg"}
              width={770}
              height={500}
              alt="about"
              quality={100}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <h2 className={styles.h22}>Why ME?:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Attention to Detail
                <p className={styles.lipara}>
                  My Attention to Detail differentiates me from others, allowing
                  me to uphold a level of{" "}
                  <span className={styles.span}>Precision and Quality</span>{" "}
                  in my work that enhances user experience and drives greater
                  client satisfaction.
                </p>
              </li>
              <li className={styles.li}>
                Adaptability
                <p className={styles.lipara}>
                  Adaptability is my core quality, enabling me to quickly adjust
                  to new challenges and technologies, ensuring that I deliver{" "}
                  <span className={styles.span}>Effective Solutions</span> in
                  a constantly evolving landscape.
                </p>
              </li>
              <li className={styles.li}>
                Creative Thinking
                <p className={styles.lipara}>
                  Creative thinking is a vital quality of mine, empowering me to
                  approach problems from{" "}
                  <span className={styles.span}>Unique angles</span> and
                  generate inventive solutions that captivate and inspire users.
                </p>
              </li>
              <li className={styles.li}>
                Design Sense
                <p className={styles.lipara}>
                  My strong design sense allows me to create visually appealing
                  and user-friendly interfaces that effectively communicate{" "}
                  <span className={styles.span}>Brand Identity</span> and
                  enhance the overall user experience.
                </p>
              </li>
              <li className={styles.li}>
                Business Acumen
                <p className={styles.lipara}>
                  My business acumen sets me apart, allowing me to understand{" "}
                  <span className={styles.span}>
                    Client Needs and Industry Trends
                  </span>{" "}
                  and deliver tailored solutions that drive value and align with
                  strategic goals.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={"/images/About1.webp"}
              width={770}
              height={500}
              alt="about"
              quality={100}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.divider}></div>
        <div className={styles.div1}>
          <div className={styles.div2}>
            <h2 className={styles.h2}>VISION:</h2>
            <p className={styles.p2}>
              As a new web developer, my vision is to create innovative,
              user-centric digital experiences that empower individuals and
              businesses to thrive online. I am committed to understanding user
              needs and preferences, ensuring that every website and application
              I develop offers intuitive navigation and engaging interactions.
            </p>
            <p className={styles.p2}>
              By leveraging cutting-edge technologies like{" "}
              <span className={styles.span}>
                React, Next.js, and Tailwind CSS
              </span>
              , I aim to build responsive and high-performance solutions that
              function seamlessly across all devices. Accessibility is a
              priority for me; I will implement best practices to ensure that my
              digital products are inclusive for all users, regardless of their
              abilities.
            </p>
            <p className={styles.p2}>
              Additionally, I recognize the importance of SEO in enhancing
              online visibility, so I will integrate effective strategies into
              my projects. Lifelong learning is essential in this dynamic field,
              and I will actively seek opportunities for professional growth to
              stay current with industry trends. I also value collaboration and
              open communication, engaging with clients and team members
              throughout the development process to align on goals and
              expectations.
            </p>
          </div>
          <div>
            <Image
              src={"/images/About11.webp"}
              width={570}
              height={500}
              alt="about"
              quality={100}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;