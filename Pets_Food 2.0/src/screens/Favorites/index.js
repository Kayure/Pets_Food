import React, {useState} from "react";
import { Text, Button } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DatePickerIOS, View, StyleSheet} from 'react-native';
import DatePicker from 'react-native-datepicker'

import Api from "../../Api";

export default () => {


    const [chosenDate, setChosenDate] = useState(new Date());



    //VARIAVEIS DO PICKER TAMANHO DA REFEIÇÃO
    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])

    //TIME PICKER
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    //FUNÇÃO QUE MUDA ANGULO
    const handleChangeAngle = async () => {
      
          let res = await Api.changeAngle(50);
          
          
      } 
  

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
            <CustomButton onPress={null}>
                    <CustomButtonText >Alimentar</CustomButtonText>
            </CustomButton> 

            <Button onPress={showDatepicker} title="Abrir Date Picker" />
            <Button onPress={showTimepicker} title="Abrir Time Picker!" />
            <Text>Data Atual: {date.toLocaleString()}</Text>
            <Text>Data Selecionada: {date.toLocaleString()}</Text>

            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
            />
      )}


    )


            


        </Container>
    )
}