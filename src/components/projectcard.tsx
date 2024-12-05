"use client"
import styles from "../styles/projectcard.module.css"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
interface ProjectCardProps
    {
        image: string,
        title: string ,
        description: string,
        VercelLink: string,
        GithubLink: string,
        
    }
const ProjectCard :React.FC <ProjectCardProps>  =({image, title, description, VercelLink, GithubLink}) =>{
    const[showGithubLink , setShowGithubLink] = useState(false);
    const toggleGithubLink =()=>{
        setShowGithubLink(prev => !prev)
    };
    return(
    <div className={styles.maindiv}>
            <Image
            src={image}
            alt={title}
            width={200}
            height={100}
            className={styles.image}/>
            <div className={styles.div}>
            <h3 className={styles.h3}>{title}</h3>
            <p>{description}</p>
            </div>
        <div className={styles.div2}>
            <Link href={VercelLink} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className={styles.vercellink}>
                    View Live
                </a>
            </Link>
        <button
                onClick={toggleGithubLink}  
                className={styles.githublink}>
                {showGithubLink ? 'Hide Github Link': 'Github Link'}
        </button>
        {showGithubLink &&(
            <p className={styles.p}>
                <Link href={GithubLink} legacyBehavior>
                <a target="_blank"  rel="noopener noreferrer" className={styles.link}>
                    Github Repo
                </a>
                </Link>
            </p>
        )}
        </div>
    </div>
    )
}

export default  ProjectCard ;