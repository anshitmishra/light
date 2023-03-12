import styles from '../styles/Home.module.css'
import Header from '../src/header'
import React from 'react';
import Link from 'next/link';
import { BsArrowRight, BsTelephone, BsInstagram, BsLinkedin } from "react-icons/bs";
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
                        data-aos-duration="2000"><img src="./design1.svg" alt="design one" /></p>
                  
                    <div className={styles.SubOnecontainer}>
                        <div className={styles.SubOnecontainerHolder}>
                            <h1>{"<>"} Social spark {"</>"}</h1>
                            <h2>{"{"} code your vision.  {"}"}</h2>
                            <button >Register Now <BsArrowRight style={{ margin: "0px 5px" }} /></button>
                            <p>2023 biggest Hackathon. join us now and win amazing prizepool</p>
                        </div>
                        <p id={styles.design2} data-aos="fade-left" data-aos-duration="3000"><img src="./design2.svg" alt="design one" /></p>

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
                            <p>third winner will get goodies.</p>
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
                            <li data-aos="fade-right" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li data-aos="fade-right" data-aos-duration="1050">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li data-aos="fade-right" data-aos-duration="1100">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li data-aos="fade-right" data-aos-duration="1150">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li data-aos="fade-right" data-aos-duration="1200">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li data-aos="fade-right" data-aos-duration="1250">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.containerFour} id='details'>

                    <div className={styles.containerFourSubOne} data-aos="fade-left" data-aos-duration="1000" >
                        <h1>Event Guidlines</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                                <img src="/daksh.jpg" alt="daksh" />
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
                                <img src="/deepanshi.jpeg" alt="deepanshi rai" />
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