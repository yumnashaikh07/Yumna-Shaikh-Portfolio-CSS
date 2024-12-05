"use client"
import styles from "../styles/skill.module.css"
import {motion , useInView} from 'framer-motion'
import React from "react"
import Image from 'next/image'
const skills=[
                {name:'Next.JS' , level: 85},
                {name:'Figma' , level: 70},
                {name:'Wix' , level: 75},
                {name:'HTML & CSS' , level: 85},
                {name:'Tailwindcss' , level: 85},
                {name:'Javascript' , level: 85},
                {name:'MS-Word' , level: 85},
                {name:'MS-Excel' , level: 85},
  
]
export default function Skill (){
    const ref = React.useRef(null)
    const isInView = useInView(ref , {once:true});
    return(
<main className={styles.main}>
  <section ref={ref} className={styles.skillssection}>
    <h1 className={styles.h1}>
      <strong>SKILLS</strong>
    </h1>

    <div className={styles.div1}>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className={styles.div2}>
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className={styles.div3}>
            <motion.div
              className={styles.motiondiv}
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.level}%` : 0 }}
              transition={{ duration: 5, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className={styles.image}>
    <Image
      src="/images/skill22.jpg"
      width={570}
      height={500}
      alt="skill"
      className={styles.img}
    />
  </section>
</main>

    )
}