import styles from './page.module.css'
import Image from 'next/image'

export default function Page(){
    return (
        <div className={styles.content_sobre}>
            <h3>CS2 INFO É DESTINADO A VISUALIZAÇÃO DE COSMÉTICOS E AFINS DO JOGO COUNTER STRIKE 2</h3>
            <Image
            src='/images/Sobre-Pic.png'
            width='300'
            height='200'
            alt='SobreImage' />
            <h3>DIVIRTA-SE</h3>
        </div>
    )
}