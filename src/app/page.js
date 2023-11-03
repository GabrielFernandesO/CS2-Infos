import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main_content}>
      <div className={styles.imageHome}>
        <Image
        src='/images/Home-Pic.png'
        width='800'
        height='700'
        alt='HomeImage'
        />
      </div>
      <div className={styles.textWelcome}>
        <p>
          <span className={styles.textBem}>BEM-VINDO AO</span>
          <span className={styles.textCS2}>CS2 INFO</span>
        </p>
        <h3>AQUI VOCÊ PODERÁ CONFERIR TUDO!</h3>
      </div>
    </div>
  )
}
