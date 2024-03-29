import React, {useEffect, useContext} from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Container } from './styles';
import {LoadingIcon} from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import PetLogo from '../../assets/pet_logo.svg'

import { UserContext } from '../../contexts/UserContext';

import Api from "../../Api";


export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //VALIDAR TOKEN
                let res = await Api.checkToken(token);
                if(res.token){
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
                }else{
                    navigation.navigate('SignIn');

                }


            }else{
                //MANDA PRA TELA DE LOGIN
                navigation.navigate('SignIn');

            }
        }
        checkToken();
    },[]);

    return(
        <Container>
            
            <PetLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFFFFFFF" />
        </Container>
    )
}