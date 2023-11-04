import axios from 'axios';

export const getAgentsData = async () => {
  try {
    const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/agents.json');
    return response.data;
   
  } catch (error) {
    console.error('Erro ao buscar agentes:', error);
    return [];
  }
};