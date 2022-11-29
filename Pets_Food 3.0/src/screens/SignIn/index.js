import React, {useEffect, useState, useContext} from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Container, InputArea, CustomButton, CustomButtonText,SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold } from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


import {UserContext} from '../../contexts/UserContext'

import PetLogo from '../../assets/pet_logo.svg'
import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'

import Api from "../../Api";

export default () => {


    //VARIAVEIS 
    const {dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setpasswordField] = useState ('');

    //FUNÇÃO QUE FAZ LOGIN
    const handleSignClick = async ()  => {
        if(emailField != '' && passwordField != ''){
            let json = await Api.signIn(emailField, passwordField);
            if(json.token ){

                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type:'setAvatar',
                    payload:{
                        avatar:json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })

                alert("FUNCIONOU")

            }else{
                alert('Email e/ou senha incorretos')
            }
        }else{
            alert("Preencha os campos obrigatórios")
        }

    }

    //FUNÇÃO QUE ENVIE O CLIENTE PARA TELA DE CADASTRO
    const handleSignUp = async ()  => {


        navigation.reset({
             routes:[{name: 'SignUp'}]
        })

                

    }    


    return(
        <Container>
            
            <PetLogo width="100%" height="160" />
            <InputArea> 
                <SignInput IconSVG={EmailIcon}
                placeholder="Digite seu Email"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
                
                />
                <SignInput IconSVG={LockIcon}
                placeholder="Digite sua Senha"
                value={passwordField}
                onChangeText={t=>setpasswordField(t)}
                password={true}
                
                />

                
               

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleSignUp}>
                <SignMessageButtonText> Ainda não possui conta ?</SignMessageButtonText>
                <SignMessageButtonTextBold>  Cadastre-se </SignMessageButtonTextBold>
            </SignMessageButton>

            
            
        </Container>
    )
}