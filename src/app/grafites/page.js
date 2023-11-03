import axios from 'axios'
import CardGraffiti from '../components/CardGraffitis/CardGraffitis';

import styles from './page.module.css'

//Request data graffitis
export async function getGraffitis() {

    const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/graffiti.json');

    if (!response) {
        console.log('Erro na requisição dos grafittis')
    }

    const grafittis = await response.data;
    console.log(grafittis)

    return grafittis
}



export default async function Page(){
  
    const grafiSprays = await getGraffitis()

    return (
        <div className={styles.cards_content}>
            {grafiSprays.map((graffiti) =>(
                <CardGraffiti graffitis={graffiti}/>
            ))}
        </div>
    )
}