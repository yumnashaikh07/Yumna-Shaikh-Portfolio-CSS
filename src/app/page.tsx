import Servicecard from "../components/servicecard";
import Herosection from "../components/herosection";
import Skill from "../components/skill";
import KeyTraits from "../components/keytraits";
import styles from "../styles/homepage.module.css"
export default function Home() {
  return (
    <main className={styles.homepage} >
      <Herosection/>
      <section>
        <Skill/>
      </section>
      <section>
        <Servicecard/>
      </section>
      
      <section>
        <KeyTraits/>
      </section>
    </main>
  );
}