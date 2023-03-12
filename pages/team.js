import styles from '../styles/Team.module.css'
import Header from '../src/header'

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div style={{ position: "relative", height: "80px" }}></div>
      <div className={styles.container}>
        <div className={styles.mainContact}>
          <div className={styles.mainContactHolder}>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/pranjal.jpg" alt="anshit" />
              </div>
              <div className={styles.cardDetails}>
                <p>daksh jha</p>
                <span>Team Coordinator</span>
              </div>
            </div>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/anshit2.jpeg" alt="anshit" />
              </div>
              <div className={styles.cardDetails}>
                <p>anshit mishra</p>
                <span>Team Coordinator</span>
              </div>
            </div>
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/rahul.jpg" alt="rahul" />
              </div>
              <div className={styles.cardDetails}>
                <p>deepanshi rai</p>
                <span>Team Coordinator</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>this website is developed by <a href="https://github.com/anshitmishra" target="_blank" rel="noopener noreferrer">Anshit mishra</a></p>
        </div>
      </div>
    </div>
  )
}
