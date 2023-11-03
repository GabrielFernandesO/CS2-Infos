import Image from 'next/image'
import Link from 'next/link';

import styles from './CardSkins.module.css'

export default function CardSkins( {skins}){
    return (
        <div className={styles.Card_Skins}>
            <Image
            src={skins.image}
            width='200'
            height='150'
            alt={skins.name}
            />
            <p>ID: {skins.id}</p>
            <p>NOME: {skins.name}</p>
            <Link className={styles.btn} href={`/skins/id/${skins.id}`}>
               Detalhes
            </Link> 
        </div>
    )
}