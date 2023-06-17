import Image from "next/image"
import Link from "next/link"
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <Link href={"/"}>
                <Image src={"/next.svg"} width={128} height={24} alt={"WhisperWeb"} />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={"/confessions"}>Confessions</Link>
                </li>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
            </ul>
            <div className={styles.line}></div>
        </nav>
    )

}
