import Link from "next/link";

import Image from 'next/image'

import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav_content}>
            <div>
                <Image
                    src='/images/CS2-logo.png'
                    width='70'
                    height='70'
                />
            </div>
            <ul>
                <li>
                    <Link href='/'> Inicio </Link>
                </li>
                <li>
                    <Link href='/agentes'> Agentes </Link>
                </li>
                <li>
                    <Link href='/skins'> Skins </Link>
                </li>
                <li>
                    <Link href='/grafites'> Grafites </Link>
                </li>
                <li>
                    <Link href='/sobre'> Sobre </Link>
                </li>
            </ul>
        </nav>
    )
}