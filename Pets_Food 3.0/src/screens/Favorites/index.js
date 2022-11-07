import React, {useState} from "react";
import { Text, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'

import Api from "../../Api";

import petApi from '../../services/api'

export default () => {
  

  const [angulo, setAngulo] = useState([]);

  const [valor, setValor] = useState('50');

  const handleRefeicaoPequena = async () => {
    if(valor != '' || valor == '') {

        let json = await Api.refeicaoPequena();
        
       

        } else {
            alert("Erro: "+res.error);
        }
    }

  const handleRefeicaoMedia = async () => {
    if(valor != '' || valor == '') {

        let res = await Api.refeicaoMedia();
        
       

        } else {
            alert("Erro: "+res.error);
        }
    }



  refeicaoMedia: async (angulo=50) => { 
    await get('https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/', {
        'valor' : 100
        }).then(response => {
        alert('[OK] Angulo Alterado com Sucesso!')
        }).catch(error => {
        alert('[ERROR]');
        })


}

refeicaoPequena: async () => { 
  await Api.get('https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/30').then(response => {
  
      alert('[OK] Alterado com Sucesso!')

  }).catch(error => {
      alert('[ERROR]');

  })
}


    //VARIAVEIS DO PICKER TAMANHO DA REFEIÇÃO
    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])
   

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
          setShow(false);
          // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };

      const showTimepicker = () => {
        showMode('time');
      };

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
            <CustomButton onPress={handleRefeicaoMedia}>
                    <CustomButtonText >Refeição Pequena</CustomButtonText>
            </CustomButton> 

            <CustomButton onPress={handleRefeicaoMedia}>
                    <CustomButtonText >Refeição Media</CustomButtonText>
            </CustomButton> 

            <CustomButton onPress={null}>
                    <CustomButtonText >Refeição Grande</CustomButtonText>
            </CustomButton> 

            

            
            

            


            


        </Container>
    )
  }