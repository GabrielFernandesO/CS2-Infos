import Image from 'next/image'
import Link from 'next/link';



import styles from './CardGraffitis.module.css'

export default function CardGraffiti( {graffitis}){
    return (
        <div className={styles.Card_graffitis}>
            <Image
            src={graffitis.image}
            width='200'
            height='150'
            alt={graffitis.name}
            />
            <p>ID: {graffitis.id}</p>
            <p>NOME: {graffitis.name}</p>
            <Link className={styles.btn} href={`/grafites/id/${graffitis.id}`}>
               Detalhes
            </Link> 
        </div>
    )
}