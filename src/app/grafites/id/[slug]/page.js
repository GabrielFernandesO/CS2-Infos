import axios from "axios";

import styles from './page.module.css'

import Image from 'next/image'

import Link from "next/link";
import Crates from '../../../components/Crates/Crates'





export default async function Page({ params }) {

    const idRequest = params.slug;

    async function getData() {
        const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/graffiti.json');
        const graffitis = response.data;
        const findID = graffitis.find(item => item.id === idRequest);
        return findID;
    }

    const graffitiRequest = await getData()

    const corrigeRaridade = function () {
        // Remove a acentuação
        let textSemAcento = graffitiRequest.rarity.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // Junta as palavras
        let textoJunto = textSemAcento.replace(/\s+/g, '');

        return textoJunto;
    }
    const Raridade = corrigeRaridade()
  

    //Tira as barras do texto
    const cleanText = graffitiRequest.description.replace(/\\/g, '').replace(/<[^>]+>/g, '');

    return (
        <section className={styles.graffiti_container}>
            <div className={styles.card_graffiti}>
                <Link href='/grafites'>
                    Voltar
                </Link>
                <Image
                    src={graffitiRequest.image}
                    width='270'
                    height='250'
                    alt={graffitiRequest.name}
                />
                <p> ID: {graffitiRequest.id}</p>
                <p> NOME: {graffitiRequest.name} </p>
                <p>DESCRIÇÃO: {cleanText}</p>
                <div className={styles.cardOtherFields}>
                    <div className={styles.fieldofCrates}>
                        <div>
                            <p>CAIXAS DE DROP:</p>
                            {graffitiRequest.crates.map((crates) => (
                                <Crates crates={crates} />
                            ))}
                        </div>

                    </div>
                    <div className={styles.raridade}>
                        <span>Raridade:</span>
                        <div className={`${styles.type} ${styles[`type_${Raridade}`]}`}> {graffitiRequest.rarity.name}</div>
                    </div>
                </div>

            </div>
        </section>

    );
}
