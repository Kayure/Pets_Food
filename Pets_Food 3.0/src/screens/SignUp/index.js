import React, {useEffect, useState} from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Container, InputArea, CustomButton, CustomButtonText,SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import {LoadingIcon} from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

import PetLogo from '../../assets/pet_logo.svg'
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg'

import Api from "../../Api";

export default () => {


    //VARIAVEIS 
    const navigation = useNavigation();

    const [nameField, setNameField] = useState ('');
    const [emailField, setEmailField] = useState ('');
    const [passwordField, setpasswordField] = useState ('');

    //FUNÇÃO QUE FAZ LOGIN
    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert("Erro: "+res.error);
            }
        } else {
            alert("Preencha os campos");
        }
    }

    //FUNÇÃO QUE ENVIE O CLIENTE PARA TELA DE CADASTRO
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }


    return(
        <Container>
            
            <PetLogo width="100%" height="160" />
            <InputArea> 

                <SignInput 
                    IconSVG={PersonIcon}
                    placeholder="Digite seu Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                
                />


                <SignInput 
                    IconSVG={EmailIcon}
                    placeholder="Digite seu Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                
                />
                <SignInput 
                    IconSVG={LockIcon}
                    placeholder="Digite sua Senha"
                    value={passwordField}
                    onChangeText={t=>setpasswordField(t)}
                    password={true}
                
                />

                
               

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>REGISTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText> Ja possui conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>  Faça Login </SignMessageButtonTextBold>
            </SignMessageButton>

            
            
        </Container>
    )
}