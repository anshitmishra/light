import styles from '../styles/Home.module.css'
import Header from '../src/header'
import React from 'react';
import Link from 'next/link';
import { BsArrowRight, BsTelephone, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
    React.useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 200,
            duration: 600,
            easing: "ease",
            once: false,
            mirror: false,
            anchorPlacement: "top-bottom",
        });
    }, []);
    return (
        <>

            <div className={styles.main}>
                <Header />
                <div style={{ position: "relative", width: "100%", height: "80px" }}></div>
                <div className={styles.container}>
                    <p id={styles.design1} data-aos="fade-up"
                        data-aos-duration="2000"><img src="./d1.svg" alt="design one" /></p>

                    <div className={styles.SubOnecontainer}>
                        <div className={styles.SubOnecontainerHolder}>
                            <h1>{"<>"} Social spark {"</>"}</h1>
                            <h2>{"{"} code your vision.  {"}"}</h2>
                            <a href='https://forms.gle/2vt4UMy7wwnEanVf9' target='_blank'><button >Register Now <BsArrowRight style={{ margin: "0px 5px" }} /></button></a>
                            <p>2023 biggest Hackathon. join us now and win amazing prizepool</p>
                        </div>
                        <p id={styles.design2} data-aos="fade-left" data-aos-duration="3000"><img src="./d2.svg" alt="design one" /></p>

                    </div>
                    <div className={styles.SubTwocontainer} data-aos="fade-up"
                        data-aos-duration="1000">
                        <img src='/mainbg.png' />
                    </div>
                </div>
                <div className={styles.containerThree} >
                    <h2>Prizepool</h2>
                    <div className={styles.containerThreeHolder} >

                        <div className={styles.prizeCard} data-aos="fade-left" data-aos-duration="1000">
                            <div className={styles.prizeCardImg}>
                                <img src='/first.png' ></img>
                            </div>
                            <p>first winner will get 3000 Rs prize</p>
                        </div>
                        <div className={styles.prizeCard} data-aos="fade-up" data-aos-duration="1000">
                            <div className={styles.prizeCardImg}>
                                <img src='/second.png' ></img>
                            </div>
                            <p>second winner will get 2000 Rs prize</p>
                        </div>
                        <div className={styles.prizeCard} data-aos="fade-right" data-aos-duration="1000">
                            <div className={styles.prizeCardImg}>
                                <img src='/third.png' ></img>
                            </div>
                            <p>third winner will get 1000rs worth goodies.</p>
                        </div>
                    </div>
                </div>


                <div className={styles.containerTwo} id='rules'>
                    <div className={styles.containerTwoSubOne} data-aos="fade-left" data-aos-duration="1000">
                        <img src="/rules.png" ></img>
                    </div>
                    <div className={styles.containerTwoSubTwo} >
                        <h1>Event Rules</h1>
                        <ul>
                            <li data-aos="fade-right" data-aos-duration="1000">We welcome attendees from all backgrounds, genders and geographies.</li>
                            <li data-aos="fade-right" data-aos-duration="1050">Participants may register as an individual or as a team with a maximum of three members per team. Only one person per team needs to apply.</li>
                            <li data-aos="fade-right" data-aos-duration="1100">It will be a  7 day long hackathon.Mode will be online.</li>
                            <li data-aos="fade-right" data-aos-duration="1150">An introductory webinar will be conducted to  explain the complete process of hackathon</li>
                            <li data-aos="fade-right" data-aos-duration="1200">Participants can use any development  platform or IDE to write their code.</li>
                            <li data-aos="fade-right" data-aos-duration="1250">The project will not be considered if submitted after the deadline.</li>
                            <li data-aos="fade-right" data-aos-duration="1300">The projects will be evaluated based on criteria such as impact, innovation, feasibility, and presentation. The judges decision will be final and binding. The jury will be composed of a group of members chosen from the most reliable professionals of the organisation as well as businessmen and startup holders.</li>
                            <li data-aos="fade-right" data-aos-duration="1350">The winning teams will receive prizes, including cash prizes, and goodies.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.containerFour} id='details'>

                    <div className={styles.containerFourSubOne} data-aos="fade-left" data-aos-duration="1000" >
                        <h1>Event Guidlines</h1>
                        <p>Social Spark is a 7 day long virtual hackathon which is being organised by LiGHT Gwalior Sithouli.The event will take place from Wednesday, March 22nd, 2023  to Wednesday, March 29, 2023.During the event, participants will work in teams or individually to develop prototypes or solutions to address social and environmental challenges. The challenges will be related to themes such as healthcare, education, climate change, poverty, and more.The event will kick off with an opening ceremony where the participants will be briefed on the challenge.
                            So, join us for Social Spark Hackathon and be a part of a community committed to creating social good through technology.It is a great opportunity to learn new skills, network with like-minded individuals, and make a positive impact.
                        </p>
                    </div>
                    <div className={styles.containerFourSubTwo} data-aos="fade-right" data-aos-duration="1000">
                        <img src="/details.png" ></img>
                    </div>
                </div>



                <div className={styles.mainContact} id='contact'>
                    <h2>Contact us</h2>
                    <div className={styles.mainContactHolder}>
                        <div className={styles.mainContactCard} data-aos="zoom-in" data-aos-duration="2000">
                            <div className={styles.mainContactCardImage}>
                                <img src="/logo2.png" alt="light ngo" />
                            </div>
                            <div className={styles.cardDetails}>
                                <p>LiGHT Gwl. Sithouli</p>
                                <span>NGO</span>
                            </div>
                            <div className={styles.cardContact}>
                                <a href="mailto:light.gwalior@gmail.com" target='_blank'><p data-aos="fade-left" data-aos-duration="1000"><AiOutlineMail /></p></a>
                                <a href='https://instagram.com/light_gwalior?igshid=YmMyMTA2M2Y=' target='_blank'  ><p data-aos="fade-left" data-aos-duration="1400"><BsInstagram /></p></a>
                                <a href='https://www.linkedin.com/in/light-gwalior-sithouli-3a1145248' target='_blank'><p data-aos="fade-left" data-aos-duration="1800"><BsLinkedin /></p></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.footerTwo}>
                    <p> <Link href={"/team"} passHref>Team Members</Link></p>
                </div>
                <div className={styles.footer}>
                    <p>this website is developed by <a href="https://github.com/anshitmishra" target="_blank" rel="noopener noreferrer">Anshit mishra</a></p>
                </div>
            </div>
        </>
    )
}


export default Home;