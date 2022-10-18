import React from "react";
import { View, Text, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable';

export default function Register() {
    return(
        <View style={styles.container}> 
            <Animatable.View animation="fadeInLeft" delay={500} styles={styles.containerHeader}>
                <Text style={styles.message}> Bem vindo </Text>
            </Animatable.View>

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
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{

    }
})