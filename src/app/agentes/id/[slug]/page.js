import axios from "axios";

import styles from './page.module.css'

import Image from 'next/image'

import Link from "next/link";





export default async function Page({ params }) {

    const idRequest = params.slug;

    async function getData() {
        const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json');
        const agentes = response.data;
        const findID = agentes.find(item => item.id === idRequest);
        return findID;
    }

    const AgenteRequest = await getData()
    const Raridade = AgenteRequest.rarity.name
  
    //Tira as barras do texto
    const cleanText = AgenteRequest.description.replace(/\\/g, '').replace(/<[^>]+>/g, '');

    return (
        <section className={styles.agente_container}>
            <div className={styles.card_Agente}>
                <Link href='/agentes'>
                    Voltar
                </Link>
                <Image
                    src={AgenteRequest.image}
                    width='270'
                    height='250'
                    alt={AgenteRequest.name}
                />
                <p> ID: {AgenteRequest.id}</p>
                <p> NOME: {AgenteRequest.name} </p>
                <p>DESCRIÇÃO: {cleanText}</p>
                <div className={styles.cardOtherFields}>
                    <div className={styles.collections}>
                        <span>Collections:</span>

                        <Image
                            src={AgenteRequest.collections[0].image}
                            width='50'
                            height='50'
                        />
                        <p>ID: {AgenteRequest.collections[0].id}</p>
                        <p>NOME: {AgenteRequest.collections[0].name}</p>
                    </div>
                    <div className={styles.raridade}>
                        <span>Raridade:</span>
                        <div className={`${styles.type} ${styles[`type_${Raridade}`]}`}> {Raridade}</div>
                    </div>
                </div>
            </div>
        </section>

    );
}
