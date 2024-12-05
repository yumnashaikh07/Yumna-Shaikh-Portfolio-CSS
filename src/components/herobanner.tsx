"use client";
import React from 'react'
import {useEffect , useState} from 'react'
import styles from "../styles/herobanner.module.css"

const texts =
[
    `*Welcome to my Portfolio*` ,
    `#Open to Work`,
    `Lets Build something Together!`
];
function Herobanner (): React.ReactElement{
    const[ index , setIndex] = useState<number>(0)

useEffect(() => {
    const timeoutId = setTimeout(() => {
        setIndex((prevIndex : number) => (prevIndex +1) % texts.length);
    },3000)
    return() => clearTimeout(timeoutId);},
    [index]);

    const next = ()=>{
        setIndex((prevIndex :number)=>(prevIndex + 1) % texts.length)
    }
    const prev =()=> {
        setIndex((prevIndex : number) => (prevIndex-1+texts.length) % texts.length)
    }

    return(
        <main className={styles.main}>        
            <div className={styles.header}> 
              <h1 className ={styles.headertext}>{texts[index]}</h1>
            <div className={styles.buttoncontainer}>
                <button onClick={prev} className={styles.prevbtn}>&lt;</button>
                <button onClick={next} className={styles.nextbtn}>&gt;</button>
            </div>
        </div>
        </main>

    )}
export default Herobanner;