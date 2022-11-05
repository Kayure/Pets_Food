import React, {useState} from "react";
import { Text, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'

import Api from "../../Api";

export default () => {


  refeicaoMedia: async (angulo=50) => { 
    await get('https://api.ifprinteligente.com.br/petsfood/rest.php/angulo/update/', {
        'valor' : 100
        }).then(response => {
        alert('[OK] Angulo Alterado com Sucesso!')
        }).catch(error => {
        alert('[ERROR]');
        })


}
    //VARIAVEIS DO PICKER TAMANHO DA REFEIÇÃO
    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])

    //TIME PICKER
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [angulo, setAngulo] = useState([]);

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
            <CustomButton onPress={Api.refeicaoPequena}>
                    <CustomButtonText >Refeição Pequena</CustomButtonText>
            </CustomButton> 

            <CustomButton onPress={Api.refeicaoMedia}>
                    <CustomButtonText >Refeição Media</CustomButtonText>
            </CustomButton> 

            <CustomButton onPress={console.log('apertou no alimentar')}>
                    <CustomButtonText >Refeição Grande</CustomButtonText>
            </CustomButton> 

            

            
            

            


            


        </Container>
    )
}