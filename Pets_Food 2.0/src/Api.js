import AsyncStorage from "@react-native-async-storage/async-storage";



const BASE_API = 'https://api.b7web.com.br/devbarber/api';

const PET_API = 'https://api.ifprinteligente.com.br/petsfood';


// Para obter o valor do ângulo:
// 1) https://api.ifprinteligente.com.br/petsfood/rest.php/angulo

// Para atualizar o valor do ângulo (30 é valor passado para atualização):
// 2) https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/30


export default {

    closeAngle: async () => {

        const req = await fetch(`${PET_API}/angulo/update/`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "valor": "0",
            })
        });

        const json = await req.json();
        return json;

    },

    openAngle: async (angle) => {

        const req = await fetch(`${PET_API}/angulo/update/50`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
               
            },
            body: JSON.stringify({

                "valor": "50",
            })
        });

        const json = await req.json();
        return json;

    },


    checkToken: async (token) => {

        const req = await fetch(`${BASE_API}/auth/refresh`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });

        const json = await req.json();
        return json;

    },
    signIn: async (email, password) => {
        const req = await fetch(`${BASE_API}/auth/login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const json = await req.json();
        return json;


    },

    
    signUp: async (name, email, password) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();        
        return json;
    },

    logout: async () => {

        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },

    getBarbers: async (lat=null, lng=null, address=null) => {
        const token = await AsyncStorage.getItem('token');

        
        console.log("ADDRESS", address);

        const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
        const json = await req.json();
        return json;
    },

    


    foodNow: async () => {
        console.log('Apertou no alimentar');

        const json = await req.json();
        return json;


    },



}