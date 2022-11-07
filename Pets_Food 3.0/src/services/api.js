import axios from 'axios'

// Para obter o valor do ângulo:
// 1) https://api.ifprinteligente.com.br/petsfood/rest.php/angulo

// Para atualizar o valor do ângulo (30 é valor passado para atualização):
// 2) https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/30

const petApi = axios.create({
    baseURL: 'https://api.ifprinteligente.com.br/petsfood/rest.php/angulo' 
})

export default petApi