import Link from "next/link";
import Image from "next/image"; 
// import HeaderSheet from "./headersheet";
import styles from "../styles/header.module.css"
export default function Header() {
  return ( 

    <main className={styles.headerContainer}>
      <section  className={styles.headerContent}>
        <div className={styles.logoContainer} >
          <Image
            src={"/images/RAYS222.png"}
            className={styles.logo}
            width={107}
            height={107}
            alt="logo"
          />
        </div>
        
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
          <li><Link href="/" className={styles.navLink}>Profile</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>      
          </ul>
        </nav>
        {/* <HeaderSheet /> */}
      </section>
    </main>
  );
}
