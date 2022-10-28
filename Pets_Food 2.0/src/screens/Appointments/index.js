import React, {useState} from "react";
import { Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';

import Api from "../../Api";


export default () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');




    const [valor] = useState('');    
    const handleSend = async () => {
        if(valor != '') {
    
          const req = await fetch('https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/', {
            method: 'POST',
            body: JSON.stringify({
              
             "valor": "25",
              
            }),
            headers:{
              'Content-Type': 'application/json'
            }
          });
    
          const json = await req.json();
    
          alert("MUDOU ANGULO! ID: "+json.valor+" - "+json.id);
        }else {
            alert("ERRO ao alterar angulo");
          }

      }

   

    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])



    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])

    

     //FUNÇÃO QUE ABRE DISPENSER
     const handleOpenAngle = async () => {

        angle = 50;
      
        let res = await Api.openAngle();
        
        
    } 

    //FUNÇÃO QUE FECHA
    const handleCloseAngle = async () => {
      
        let res = await Api.closeAngle(0);
        
        
    } 

    return (
        <Container>
            <HeaderTitle> Selecione o tamanho da refeição: </HeaderTitle>
            <Picker
                selectedValue={tamanhoSelecionado}
                onValueChange={(itemValue, itemIndex) =>
                    setTamanhoSelecionado(itemValue)
                }>
                    {tamanhos.map(cr => {
                        return <Picker.Item label={cr} value={cr} />

                     })}
            </Picker>
            <Text> o Tamanho selecionado foi: {tamanhoSelecionado}</Text>

            <CustomButton onPress={handleSend} >
                    <CustomButtonText>Abrir</CustomButtonText>
                </CustomButton>

            <CustomButton onPress={handleCloseAngle} >
                <CustomButtonText>Fechar</CustomButtonText>
            </CustomButton>


        </Container>
    )
}