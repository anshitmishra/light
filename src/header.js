import styles from '../styles/Header.module.css'
import Image from 'next/image';

const Header = () => {

    return (
        <>
            <div className={styles.main} >
                <div className={styles.mainLogo}>
                    <Image src="/logo.png" width={200} height={216} style={{objectFit:"contain"}}/>
                    <span></span>
                </div>
                <div className={styles.mainList}>
                    <p>Event Details</p>
                    <p>Rules</p>
                    <p>Team</p>
                    <p>Contact us</p>
                </div>
            </div>
        </>
    )
}

export default Header;