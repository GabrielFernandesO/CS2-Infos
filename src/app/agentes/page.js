import axios from "axios"

import styles from './page.module.css'

import CardAgents from "../components/CardAgents/CardAgentes";

//Request data Agents
export async function getAgents() {

    const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json');

    if (!response) {
        console.log('Erro na requisição dos agentes')
    }

    const agentes = await response.data;

    return agentes
}

export default async function Page() {
    
    const agentes = await getAgents()
 
    return (
        <div className={styles.cards_content}>
            {agentes.map((agnt) => (
                <CardAgents key={agnt.id} agentes={agnt} />
            ))} 
        </div>
    )
}