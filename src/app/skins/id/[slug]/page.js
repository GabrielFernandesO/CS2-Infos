import axios from "axios";

import styles from './page.module.css'

import Image from 'next/image'

import Link from "next/link";
import Crates from '../../../components/Crates/Crates'





export default async function Page({ params }) {

    const idRequest = params.slug;

    async function getData() {
        const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/skins.json');
        const skins = response.data;
        const findID = skins.find(item => item.id === idRequest);
        return findID;
    }

    const skinRequest = await getData()
    const Raridade = skinRequest.rarity.name

    //Verifica se há stattrak ou não
    const statTrak = function () {
        if (!skinRequest.stattrak) {
            return 'Não possui'
        }

        return 'Possui'
    }

    const haveStatTrek = statTrak()



    //Tira as barras do texto
    const cleanText = skinRequest.description.replace(/\\/g, '').replace(/<[^>]+>/g, '');

    return (
        <section className={styles.skin_container}>
            <div className={styles.card_skin}>
                <Link href='/skins'>
                    Voltar
                </Link>
                <Image
                    src={skinRequest.image}
                    width='270'
                    height='250'
                    alt={skinRequest.name}
                />
                <p> ID: {skinRequest.id}</p>
                <p> NOME: {skinRequest.name} </p>
                <p>CATEGORIA: {skinRequest.category.name}</p>
                <p>STATTRAK: {haveStatTrek}</p>
                <p>DESCRIÇÃO: {cleanText}</p>
                <div className={styles.cardOtherFields}>
                    <div className={styles.collections}>
                        <span>Collections:</span>

                        <Image
                            src={skinRequest.collections[0].image}
                            width='50'
                            height='50'
                        />
                        <p>ID: {skinRequest.collections[0].id}</p>
                        <p>NOME: {skinRequest.collections[0].name}</p>
                    </div>
                    <div className={styles.raridade}>
                        <span>Raridade:</span>
                        <div className={`${styles.type} ${styles[`type_${Raridade}`]}`}> {Raridade}</div>
                    </div>
                </div>
                <div className={styles.fieldofCrates}>
                    <div>
                        <p>CAIXAS DE DROP:</p>
                       {skinRequest.crates.map((crates) =>(
                        <Crates crates = {crates}/>
                       ))}
                    </div>

                </div>
            </div>
        </section>

    );
}
