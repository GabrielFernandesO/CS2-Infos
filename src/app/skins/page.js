'use client'

import styles from './page.module.css'
import CardSkins from "../components/CardSkins/CardSkins";
import { useState, useEffect } from 'react';

import { getSkinsData } from '@/app/API/Skins'






const SkinsperPage = 9

export default function Page() {
    //Armazena em uma variavel state o array com todos os agentes
    const [skins, setSkins] = useState([]);
    //Página atual
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        async function fetchData() {
            const skinsData = await getSkinsData(); // Assuming getAgentsData fetches the agents data
            setSkins(skinsData);
        }
        fetchData()
    }, [])



    //Função para lidar com o carregamento mais
    async function handleLoadMore() {
        //Adiciona mais uma pagina
        const newPage = currentPage + 1;
        //Atualiza o array com os agentes para a nova pagina
        const newSkinsData = await getSkinsData(); // Fetch new data for the next page
        //Adiciona em agentes por rest operator para adicionar mais agentes de acordo com o que tinha antes
        setSkins([...skins, ...newSkinsData]);
        //Atualiza a page
        setCurrentPage(newPage);

    }

    return (
        <div className={styles.cards_content}>
            {skins.slice(0, SkinsperPage * currentPage).map((skin) => (
                <CardSkins key={skin.id} skins={skin} />
            ))}

            {/* Botão para acionar a function de carregar mais
            Lembrando que o tamanho do agente sempre tem que ser maior que a quantidade de agentes x a pagina atual */}
            {(currentPage < 191) && (
                <button className={styles.btn_CarregaMais} onClick={handleLoadMore}>Carregar Mais</button>
            )}
        </div>
    )
}