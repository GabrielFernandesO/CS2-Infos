import Image from 'next/image'

import styles from './Crates.module.css'

export default function Crates({crates }){
   
 
    return (
        <div className={styles.crates}>
            <Image
            src={crates.image}
            width='100'
            height='100'
            alt={crates.name}
            />
            <p>ID: {crates.id}</p>
            <p>NOME: {crates.name}</p>
        </div>
    )
}