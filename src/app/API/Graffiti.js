import axios from 'axios';

export const getGraffitisData = async () => {
  try {
    const response = await axios.get('https://bymykel.github.io/CSGO-API/api/pt-BR/graffiti.json');
    return response.data;
   
  } catch (error) {
    console.error('Erro ao buscar agentes:', error);
    return [];
  }
};





