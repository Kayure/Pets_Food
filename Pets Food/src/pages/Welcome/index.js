import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import Routes from "../../routes/routes";
import {useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable'

export default function Welcome() {

    const navigation = useNavigation();


    return(

        <View style={styles.container}> 

            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../assets/logo3.png')}
                    style={{width: '100%'}}
                    resizeMode="contain"
                    
                />
                
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}> 
                <Text style={styles.title}> Pets Food </Text>
                <Text style={styles.text}> Alimentação e saúde lado a lado </Text>


                {/* Inputs de login para futuramente  */}

                {/* <View style={styles.containerLogin}> 
                    {/* Caixas de texto */}
                    {/* <Text style={styles.titleLogin}> E-mail</Text>
                    <TextInput
                        placeholder="Digite seu e-mail"
                        style={styles.input}
                    /> */}
                    {/* <Text style={styles.titleLogin}> Senha</Text>
                    <TextInput
                        placeholder="Digite sua Senha"
                        style={styles.input}
                    />                    
                </View>  */} 
                

                <TouchableOpacity 
                    style={styles.buttonLogin}
                     onPress={ () => navigation.navigate('Home')}
                >
                   <Text style={styles.buttonText}>Acessar</Text>   
                </TouchableOpacity>

                {/* <Button
                    title="Entrar com Google"
                    icon="social-google"
                    onPress={handleSignIn}
                /> */}

                {/* <TouchableOpacity style={styles.buttonRegister}>
                   <Text style={styles.buttonTextRegister}>Cadastrar </Text> 
                </TouchableOpacity> */}
                
            </Animatable.View>

        
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'#38a69d',
    },

    containerLogo:{
        flex:2,
        backgroundColor:'#38a69d',
        alignItems: 'center',
        justifyContent: 'center'
       
    },
    containerForm:{
        flex:3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',  
        alignItems: 'center',                
        paddingEnd: '5%'
        
    },

    containerLogin:{
        marginTop:'14%',
        marginBottom: '8¢',
        paddingStart: '5%',
        
    },
    title:{
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 28,
        marginBottom: 12,
        alignItems: 'center',  
        

    },
    titleLogin:{
        fontSize:20,
        marginTop:28,

    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        alignItems: 'left', 


    },
    text:{
        color: '#a1a1a1'

    },
    buttonLogin:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        alignSelf:'center',
        width:'50%',
        bottom: '30%',        
        alignItems: 'center',
        justifyContent:'center',


    },

    buttonRegister:{
        position: 'absolute',       
        borderRadius: 50,
        paddingVertical: 8,
        alignSelf:'center',
        width:'10%',
        bottom: '15%',        
        alignItems: 'center',
        justifyContent:'center',


    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'

    },
    buttonTextRegister:{
        fontSize: 12,
        textDecorationLine: 'underline',
        


    },

})