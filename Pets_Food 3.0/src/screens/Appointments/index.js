import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, 
    ScrollView, Keyboard, ActivityIndicator } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';


import styles from './styles'
import petApi from '../../services/api'

class Appointments extends React.Component  {

   

    constructor(props) {
        super(props)
        this.state = {            
            valor: '',
            id: '',
            datahora:'',
            refreshing :false,           
            list: [],
        }
    }

    

    async componentDidMount() {
        this.read()
    }

    async create() {

        if(this.state.word != '') {
            await petApi.get('/update', {
                'valor' : 100
            }).then(response => {
                alert('[OK] Alterado com Sucesso!')
            }).catch(error => {
                alert('[ERROR]');
            })
            this.read()
        }
        else {
            alert("[ERROR] Palavra em branco!")
        }
        this.setState({
            
            valor: 100,
            
        })
        Keyboard.dismiss()
    }

    async read() {
        this.setState({load: true})
        await petApi.get('').then(response => {
            this.setState({
                list: response.data
            })
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false})
    }

    async abrir() {
        this.setState({load: true})
        await petApi.get('/update/50').then(response => {
            this.setState({
                valor: 50,
               
            },alert('[OK] Angulo alterado para: 50'))
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false})
        this.read()
    }


    async fechar() {
        this.setState({load: true, refreshing: true})
        await petApi.get('/update/100').then(response => {
            this.setState({
                valor: 100
            },alert('[OK] Angulo alterado para: 100'))
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false, refreshing: false})
        this.read()
    }

    

    

    setWordUpdate(item) {
        this.setState({
            wordup: item.valor,
            wordid: item.id,
            edit: true,
        })
    }

    listAndIndicator() {
        if(this.state.load) {  
            return <ActivityIndicator size="large" color="#CC0"/>
        }
        return(
            this.state.list.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={styles.listItem} onPress={() => {this.setWordUpdate(item)}}>
                        <Text style={styles.textListItem} >
                            ID:                          
                            {item.id}
                        </Text>
                        <Text style={styles.textListItem}>
                            Angulo: {item.valor}                            
                        </Text>
                        <Text style={styles.textListItem}>
                            Alterado em: {item.datahora}                            
                        </Text>
                    </TouchableOpacity> 
                )
            })
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Selecione o tamanho da refeição</Text>
                </View>   

                

                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => {this.abrir()}}
                >
                    <Text style={styles.touchText}>Abrir [50°] </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => {this.fechar()}}
                >
                    <Text style={styles.touchText}>Fechar [100°]</Text>
                </TouchableOpacity>

                
                    <Text style={styles.subTitle}>Valores da Api</Text>
                 
                <ScrollView style={styles.list}>
                    { this.listAndIndicator() }
                </ScrollView>

                

                <TouchableOpacity
                    style={styles.touch}
                    onPress={() => this.food()}
                >
                    <Text style={styles.touchText}>Atualizar Pagina</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default Appointments