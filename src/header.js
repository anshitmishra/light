import styles from '../styles/Header.module.css'
import Link from 'next/link';
const Header = () => {

    return (
        <>
            <div className={styles.main} >
                <Link href={"/"} passHref><div className={styles.mainLogo}>
                    <img src="/logo.png" style={{objectFit:"contain"}}/>
                </div></Link>
                <div className={styles.mainList}>
                    <Link href={"/#details"} passHref><p>Event Details</p></Link>
                    <Link href={"/#rules"} passHref><p>Rules</p></Link>
                    <Link href={"/team"} passHref><p>Team</p></Link>
                    <Link href={"/#contact"} passHref><p>Contact us</p></Link>
                </div>
            </div>
        </>
    )
}

export default Header;