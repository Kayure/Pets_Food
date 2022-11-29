import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, 
    ScrollView, Keyboard, ActivityIndicator } from "react-native";

import { CustomButton, CustomButtonText, Container, HeaderTitle } from './styles';


import styles from './styles'
import petApi from '../../services/api'

class Favorites extends React.Component  {

   

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
               
            },)
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
            },)
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false, refreshing: false})
        this.read()
    }

    async refeicaoPequena() {
        this.setState({load: true, refreshing: true})
        await petApi.get('/update/1').then(response => {
            this.setState({
                valor: 1
            },)
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false, refreshing: false})
        this.read()
    }

    async refeicaoMedia() {
        this.setState({load: true, refreshing: true})
        await petApi.get('/update/2').then(response => {
            this.setState({
                valor: 2
            },)
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false, refreshing: false})
        this.read()
    }

    async refeicaoGrande() {
        this.setState({load: true, refreshing: true})
        await petApi.get('/update/3').then(response => {
            this.setState({
                valor: 3
            },)
        }).catch(error => {
            console.log(error)
        })
        this.setState({load: false, refreshing: false})
        this.read()
    }

    async fechar() {
        this.setState({load: true, refreshing: true})
        await petApi.get('/update/0').then(response => {
            this.setState({
                valor: 3
            },)
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
                    <TouchableOpacity key={index} style={styles.listItem}  onPress={() => {this.setWordUpdate(item)}}>
                        {/* <Text style={styles.textListItem} >
                            ID:                          
                            {item.id}
                        </Text>
                        <Text style={styles.textListItem}>
                            Angulo: {item.valor}                            
                        </Text> */}
                        <Text style={styles.textListItem}>
                            Data: {item.datahora}                            
                        </Text>
                    </TouchableOpacity> 
                )
            })
        )
    }

    //VISUALIZAÇÃO DA APLICAÇÃO
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Ultima refeição</Text>
                </View>                   

                

              

                 
                <ScrollView style={styles.list}>
                    { this.listAndIndicator() }
                </ScrollView>

               

            </View>
        )
    }
}

export default Favorites