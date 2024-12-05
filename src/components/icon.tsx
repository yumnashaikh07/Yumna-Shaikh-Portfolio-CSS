import { FaEnvelope, FaPhone, FaLinkedin,  FaGithub} from "react-icons/fa";
import styles from "../styles/icon.module.css"

const ContactIcons = () => {
  return (
    <main>
      <h1 className={styles.title}>GET TO KNOW MORE</h1>
    <section className={styles.section}>
    
      <a
        href="mailto:yumnashaiykh@gmail.com"
        aria-label="Email"
      >
        <FaEnvelope size={31} className={styles.emailicon}/>
      </a>
      <a
        href="https://www.linkedin.com/in/yumna-shaikh-b90191337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={35} className={styles.linkedinicon}/>
      </a>
      <a
        href="tel:+923132480307"
        aria-label="Phone"
      >
        <FaPhone size={31} className={styles.phoneicon} />
       
      </a>
      <a
        href="https://github.com/yumnashaikh07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaGithub size={37}  className= {styles.githubicon}/>
      </a>

      </section>
      <section className={styles.linksection}>
      <div className={styles.linkemail}>Email</div>
      <div className={styles.linklinkedin}>LinkedIn</div>
      <div className={styles.linkphone}>Phone</div>
      <div className={styles.linkgithub}>Github</div>
      </section>
    </main>
  );
};

export default ContactIcons;