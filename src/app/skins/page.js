import axios from "axios";

import styles from './page.module.css'
import CardAgents from "../components/CardSkins/CardSkins";
import CardSkins from "../components/CardSkins/CardSkins";




//Request data skins
export async function getSkins() {

    const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json');

    if (!response) {
        console.log('Erro na requisição das skins')
    }

    const skins = await response.data;

    return skins
}


export default async function Page() {

    const weaponSkins = await getSkins()

    return (
        <div className={styles.cards_content}>
            {weaponSkins.map((skin) => (
                <CardSkins key={skin.id} skins= {skin}/>
            ))}
        </div>
    )
}