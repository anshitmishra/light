import styles from '../styles/Team.module.css'
import Header from '../src/header'

export default function Team() {
  return (
    <div className={styles.main}>
      <Header />
      <div style={{ position: "relative", height: "80px" }}></div>
      <div className={styles.container}>
        <div className={styles.mainContact}>
          <div className={styles.mainContactHolder}>

          
            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/7.jpg" alt="Himanshu Dewangan" />
              </div>
              <div className={styles.cardDetails}>
                <p>Himanshu Dewangan</p>
                <span>Head</span>
              </div>
            </div>

            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/10.webp" alt="Ayush Gupta" />
              </div>
              <div className={styles.cardDetails}>
                <p>Ayush Gupta</p>
                <span>Head</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/8.jpeg" alt="Isha" />
              </div>
              <div className={styles.cardDetails}>
                <p>Isha</p>
                <span>Head</span>
              </div>
            </div>

            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/9.jpg" alt="Mohini" />
              </div>
              <div className={styles.cardDetails}>
                <p>Mohini</p>
                <span>Head</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/1.webp" alt="Shobhita Bhatt" />
              </div>
              <div className={styles.cardDetails}>
                <p>Shobhita Bhatt</p>
                <span>Team member</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/2.jpg" alt="Yashaswini Bakshi" />
              </div>
              <div className={styles.cardDetails}>
                <p>Yashaswini Bakshi</p>
                <span>Team member</span>
              </div>
            </div>

            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/3.jpg" alt="Richa uchariya" />
              </div>
              <div className={styles.cardDetails}>
                <p>Richa uchariya</p>
                <span>Team member</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/4.jpg" alt="Nisha soni" />
              </div>
              <div className={styles.cardDetails}>
                <p>Nisha soni</p>
                <span>Team member</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/5.jpg" alt="Deeksha Pokhariya" />
              </div>
              <div className={styles.cardDetails}>
                <p>Deeksha Pokhariya</p>
                <span>Team member</span>
              </div>
            </div>


            <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
              <div className={styles.mainContactCardImage}>
                <img src="/team/6.png" alt="Amisha Arora" />
              </div>
              <div className={styles.cardDetails}>
                <p>Amisha Arora</p>
                <span>Team member</span>
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
