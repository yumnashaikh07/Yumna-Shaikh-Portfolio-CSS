import Image from "next/image"
import style from "../styles/keytrait.module.css"
export default function KeyTraits(){
    return(
        <main className={style.main}>
            <h1 className={style.h1}>
          <strong>KEY TRAITS</strong>
           </h1>
           <section className={style.section}>
            <div className={style.imagediv}>
                <Image 
                src={"/images/key3.webp"}
                width={175}
                height={175}
                alt="keytraits"
                className={style.img}/>
               
                    <h3 className={style.h3}>Attention to Detail</h3>
                    <p  className={style.p} >I create user-centric web solutions with attention to detail, prioritizing usability and seamless functionality for a positive user experience.</p>  
            </div>
    
            <div className={style.imagediv}>
            <Image 
                src={"/images/key11.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className={style.img}/>
            <h3 className={style.h3}>Quick Turnaround</h3>
                    <p  className={style.p} >Quick turnaround is a core strength of mine, enabling me to complete website development and production in just one week</p>
               
            </div>
            <div className={style.imagediv}>
            <Image 
                src={"/images/key222.jpg"}
                width={175}
                height={175}
                alt="keytraits"
                className={style.img}/>
                
                <h3 className={style.h3}>Effective Communication</h3>
                    <p className={style.p}>Effective communication is a key skill of mine,  ensuring clear understanding, smooth collaboration, and successful project outcomes.</p>
                </div>
            </section>
            
        </main>
    )
}