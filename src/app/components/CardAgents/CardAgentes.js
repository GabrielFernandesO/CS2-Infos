import Image from 'next/image'
import Link from 'next/link';



import styles from './CardAgentes.module.css'

export default function CardAgents( {agentes}){
    return (
        <div className={styles.Card_Agentes}>
            <Image
            src={agentes.image}
            width='200'
            height='150'
            alt={agentes.name}
            />
            <p>ID: {agentes.id}</p>
            <p>NOME: {agentes.name}</p>
            <Link className={styles.btn} href={`/agentes/id/${agentes.id}`}>
               Detalhes
            </Link> 
        </div>
    )
}