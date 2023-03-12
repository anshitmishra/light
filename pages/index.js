import styles from '../styles/Home.module.css'
import Header from '../src/header'
import { BsArrowRight, BsTelephone, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div style={{ position: "relative", height: "80px" }}></div>
      <div className={styles.container}>
        <div className={styles.SubOnecontainer}>
          <div className={styles.SubOnecontainerHolder}>
            <h1>{"<>"} Hack-A-Bulb {"</>"}</h1>
            <h2>{"{"} code your vision.  {"}"}</h2>
            <button >Register Now <BsArrowRight style={{ margin: "0px 5px" }} /></button>
            <p>2023 biggest Hackathon. join us now and win amazing prizepool</p>
          </div>
        </div>
        <div className={styles.SubTwocontainer}>
          <img src='/mainbg.png' />
        </div>
      </div>
      <div className={styles.containerThree} >
        <h2>Prizepool</h2>
        <div className={styles.containerThreeHolder} >

          <div className={styles.prizeCard}>
            <div className={styles.prizeCardImg}>
              <img src='/first.png' ></img>
            </div>
            <p>first winner will get 3000 Rs prize</p>
          </div>
          <div className={styles.prizeCard}>
            <div className={styles.prizeCardImg}>
              <img src='/second.png' ></img>
            </div>
            <p>second winner will get 2000 Rs prize</p>
          </div>
          <div className={styles.prizeCard}>
            <div className={styles.prizeCardImg}>
              <img src='/third.png' ></img>
            </div>
            <p>third winner will get goodies.</p>
          </div>
        </div>
      </div>


      <div className={styles.containerTwo} >
        <div className={styles.containerTwoSubOne} >
          <img src="/rules.png" ></img>
        </div>
        <div className={styles.containerTwoSubTwo} >
          <h1>Event Guidlines</h1>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          </ul>
        </div>
      </div>

      <div className={styles.containerFour} >

        <div className={styles.containerFourSubOne} >
          <h1>Event Guidlines</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={styles.containerFourSubTwo} >
          <img src="/details.png" ></img>
        </div>
      </div>



      <div className={styles.mainContact}>
        <h2>Contact us</h2>
        <div className={styles.mainContactHolder}>
          <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
            <div className={styles.mainContactCardImage}>
              <img src="/anshit2.jpeg" alt="anshit" />
            </div>
            <div className={styles.cardDetails}>
              <p>daksh jha</p>
              <span>Team Coordinator</span>
            </div>
            <div className={styles.cardContact}>
              <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
              <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
              <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
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
            <div className={styles.cardContact}>
              <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
              <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
              <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
            </div>
          </div>
          <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
            <div className={styles.mainContactCardImage}>
              <img src="/anshit2.jpeg" alt="rahul" />
            </div>
            <div className={styles.cardDetails}>
              <p>deepanshi rai</p>
              <span>Team Coordinator</span>
            </div>
            <div className={styles.cardContact}>
              <p data-aos="fade-left" data-aos-duration="1000"><BsTelephone /></p>
              <p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p>
              <p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>this website is developed by <a href="https://github.com/anshitmishra" target="_blank" rel="noopener noreferrer">Anshit mishra</a></p>
      </div>
    </div>
  )
}
