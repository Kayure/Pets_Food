import React, {useState} from "react";
import { Text } from "react-native";

import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';

export default () => {

    const [tamanhos, setTamanhos] = useState(['Pequena','Media','Grande'])

    const [tamanhoSelecionado, setTamanhoSelecionado] = useState([])


    return (
        <Container>
            <HeaderTitle> Selecione o tamanho da refeição: </HeaderTitle>
            
            <Text> o Tamanho selecionado foi: {tamanhoSelecionado}</Text>
            <CustomButton onPress={console.log('apertou no alimentar')}>
                    <CustomButtonText >Alimentar</CustomButtonText>
                </CustomButton>        
            


        </Container>
    )
}