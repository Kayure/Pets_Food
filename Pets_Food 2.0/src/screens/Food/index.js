import React, {useState} from "react";
import { Text } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';

export default () => {

    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])


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
            <CustomButton onPress={console.log('apertou no alimentar')}>
                    <CustomButtonText >Alimentar</CustomButtonText>
                </CustomButton>        
            


        </Container>
    )
}