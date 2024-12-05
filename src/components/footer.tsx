import ContactIcons from './icon';
import Link from "next/link";
import styles from "../styles/footer.module.css" 
export default function Footer (){
return(
  <footer className={styles.footer}>
  <section className={styles.footersection}>
    <div className={styles.contacticons}>
      <ContactIcons />
    </div>
    <nav className={styles.footernav}>
      <h4 className={styles.footerh4}>QUICK LINKS:</h4>
      <ul className={styles.footerul}>
        <li><Link href="/" className={styles.navLink}>Profile</Link></li>
        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
        <li><Link href="/about" className={styles.navLink}>About</Link></li>
        <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
      </ul>
    </nav>

  </section>
  <div className={styles.footerText}>
    © 2024 My Portfolio Website | All rights reserved
  </div>
  <div className={`${styles.footerText} ${styles.secondary}`}>
    Powered by RAYS Solutions
  </div>
</footer>
)}