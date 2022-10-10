import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
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
                <Text style={styles.text}> Faça login para começar </Text>

                <View style={styles.containerLogin}> 

                    {/* Caixas de texto */}
                    <Text style={styles.titleLogin}> E-mail</Text>
                    <TextInput
                        placeholder="Digite seu e-mail"
                        style={styles.input}
                    />

                    <Text style={styles.titleLogin}> Senha</Text>
                    <TextInput
                        placeholder="Digite sua Senha"
                        style={styles.input}
                    />
                    
                </View>              
                

                <TouchableOpacity 
                    style={styles.buttonLogin}
                    // onPress={ () => navigation.navigate('SignIn')}
                >
                   <Text style={styles.buttonText}>Login</Text>   
                </TouchableOpacity>

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
        width:'60%',
        bottom: '15%',        
        alignItems: 'center',
        justifyContent:'right',


    },

    buttonRegister:{
        position: 'absolute',       
        borderRadius: 50,
        paddingVertical: 8,
        alignSelf:'right',
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