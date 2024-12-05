import Image from "next/image";
import Link from "next/link";
import styles from "../styles/herosection.module.css"
export default function  Herosection ()
{
    return(
        <main className={styles.main}> 
      <section className={styles.section}>
      <div className={styles.imgdiv}>
      <Image 
      src={"/images/PORT 1.png"}
      width={500}
      height={500}
      alt="image"
      quality={100}
      className={styles.img}/>
</div>
<div className={styles.herodiv}>
      <div className={styles.heroslide}>
          <div className={styles.divh1}>
            <h1>
              <strong>YUMNA</strong>
            </h1>
            <h1>
              <strong>SHAIKH</strong>
            </h1>
          </div>
          <div className={styles.divider}></div>
          <h3 className={styles.h3}>
            WEB-DEVELOPER
          </h3>
          <div className={styles.divp}>
          <p >I create tailored websites and applications that</p>
          <p >combine visual appeal with high functionality</p> 
          </div>
          <div>
          <Link href={"/contact"} >
          <button className={styles.button}>For Queries</button></Link>
          </div>
        </div>
  </div>    
      </section>
        </main>
    
)
}