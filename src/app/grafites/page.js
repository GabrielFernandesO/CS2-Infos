'use client'
import CardGraffiti from '../components/CardGraffitis/CardGraffitis';

import styles from './page.module.css'

import { getGraffitisData } from '../API/Graffiti';

import { useState, useEffect } from 'react';

const GraffitisperPage = 9;
export default function Page() {

    //Armazena em uma variavel state o array com todos os agentes
    const [graffitis, setGraffitis] = useState([]);
    //Página atual
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const graffitisData = await getGraffitisData()
            setGraffitis(graffitisData)
        }
        //Chama para a requisição ser feita após o componente ser renderizado
        fetchData()
    }, [])

    async function handleLoadMore() {
        const newPage = currentPage + 1;
        const newGraffitis = await getGraffitisData();
        //Seta o array graffiti que é o atual e adiciona o novo que adicionará novamente todos os objetos
        //Mas no map com slice será cortado novamente para a nova logica de graffitis per page * currentPage
        setGraffitis([...graffitis, ...newGraffitis])
        setCurrentPage(newPage);
    }
    return (
        <div className={styles.cards_content}>
            {graffitis.slice(0, GraffitisperPage * currentPage).map((graffiti) => (
                <CardGraffiti graffitis={graffiti} />
            ))}
                 
            {/* Quantidade de paginas até fechar o total de items para não repetir em looping */}
            {(currentPage < 43) && (
                <button className={styles.btn_CarregaMais} onClick={handleLoadMore}>Carregar Mais</button>
            )}
        </div>
    )
}