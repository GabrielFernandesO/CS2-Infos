 //Para usar funcionalidades na web sem ser no servidor, como buscar api ou somente mostrar os dados
 //Isso faz com que seja enviado menos js para o navegador sem necessidade

 //A API utilizada não possui LIMIT E NEM DATAPER PAGE ENTÃO FAZEMOS COM UM DADO DEFINIDO PARA CARREGAR MAIS
'use client'

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import CardAgents from '../components/CardAgents/CardAgentes';

//Como precisamos do use client, a api deverá ser importada de outro local
import { getAgentsData } from '@/app/API/Agentes';

//Quantidade de agentes que irão aparecer por página
const AgentsperPage = 9;

export default function Page() {
    //Armazena em uma variavel state o array com todos os agentes
    const [agentes, setAgentes] = useState([]);
    //Página atual
    const [currentPage, setCurrentPage] = useState(1);
    

    //Onde é capturado os dados  da requisiçao da api já feita em outro arquivo
    useEffect(() => {
       async function fetchData(){
            const agentsData = await getAgentsData(); // Assuming getAgentsData fetches the agents data
            setAgentes(agentsData);
            
        }
        fetchData();

    }, []);

    //Função para lidar com o carregamento mais
    async function handleLoadMore(){

        //Adiciona mais uma pagina
        const newPage = currentPage + 1;
        //Atualiza o array com os agentes para a nova pagina
        const newAgentsData = await getAgentsData(); // Fetch new data for the next page
        //Adiciona em agentes por rest operator para adicionar mais agentes de acordo com o que tinha antes
        setAgentes([...agentes, ...newAgentsData]);
        //Atualiza a page
        setCurrentPage(newPage);
      
     
    }

    

    return (
        <div className={styles.cards_content}>
            {/* Aqui seccioca o array com slice do primeiro indice que sempre será 0 e o ultimo indice que será sempre a pagina atual x a quantidade de agentes por pagina, assim ele sempre vai ir acrescentando 9 */}
            {agentes.slice(0, currentPage * AgentsperPage).map((agnt) => (
                <CardAgents key={agnt.id} agentes={agnt} />
            ))}
            {/* Botão para acionar a function de carregar mais
            Lembrando que o tamanho do agente sempre tem que ser maior que a quantidade de agentes x a pagina atual */}
            { (currentPage < 7)  && (
                <button className={styles.btn_CarregaMais} onClick={handleLoadMore}>Carregar Mais</button>
            )}
        </div>
    );
}
