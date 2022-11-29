import React, {useState, useEffect} from "react";
import { Text, Button } from "react-native";
import {Container, Scroller, HeaderArea, HeaderTitle, SearchButton} from './styles';
import {ServiceArea, ServiceItem, ServiceInfo, ServiceChooseButton, ServiceName, ServiceChooseBtnText, ServiceTitle} from './styles';
import {TimeList, TimeItem, TimeitemText, DateList} from './styles';
import { useNavigation } from "@react-navigation/native";

import { RefreshControl } from 'react-native';



import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import Api from "../../Api";

import Stars from '../../components/Stars'
import Logout1 from '../../assets/logout1'
import Logout2 from '../../assets/logout2'

//COMPONENTS
import BarberItem from '../../components/BarberItem'
import CafeModal from '../../components/CafeModal'
import AlmocoModal from '../../components/AlmocoModal'
import JantaModal from '../../components/JantaModal'
import { ScrollView } from "react-native-gesture-handler";


export default () => {

    

    const navigation = useNavigation();

    //HORARIOS
    const [selectedHourCafe, setSelectedHourCafe] = useState(null);
    const [selectedHourAlmoco, setSelectedHourAlmoco] = useState(null);
    const [selectedHourJanta, setSelectedHourJanta] = useState(null);



    const hoursAlmoco = [
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
    ]

    const hoursJanta = [
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ]



    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    //PETS 
    const [showModalCafe, setShowModalCafe] = useState(false);
    const [showModalAlmoco, setShowModalAlmoco] = useState(false);
    const [showModalJanta, setShowModalJanta] = useState(false);

    const [selectedCafe, setSelectedCafe] = useState(0);
    const [selectedAlmoco, setSelectedAlmoco] = useState(0);
    const [selectedJanta, setSelectedJanta] = useState(0);

    const [cafe, setCafe] = useState([
        {name:'06:00', key: '1'},
        {name:'07:00', key: '2'},
        {name:'08:00', key: '3'},
        {name:'09:00', key: '4'},
        {name:'10:00', key: '5'},
        {name:'11:00', key: '6'},
    ]);

    const [almoco, setAlmoco] = useState([
        {name:'12:00', key: '7'},
        {name:'13:00', key: '8'},
        {name:'14:00', key: '9'},
        {name:'15:00', key: '10'},
        {name:'16:00', key: '11'},
        {name:'17:00', key: '12'},
    ]);

    const [janta, setJanta] = useState([
        {name:'18:00', key: '13'},
        {name:'19:00', key: '14'},
        {name:'20:00', key: '15'},
        {name:'21:00', key: '16'},
        {name:'22:00', key: '17'},
        {name:'23:00', key: '18'},

        
    ]);

    useEffect(()=>{
        let daysInMonth
       


    }, []);

    //FUNÇÃO LOGOUT

    const handleLogoutClick = async() => {

        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });

    }
    
    
    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }


    return (
        <Container>
            
            <Scroller RefreshControl={
                <RefreshControl refreshing={refreshing} on onRefresh={onRefresh} />
            } >
                
                <HeaderArea>
                {/* <Logout1   onPress={handleLogoutClick} /> */}
               
                    <HeaderTitle> Meus Agendamentos: </HeaderTitle>
                    
                </HeaderArea>

                <ServiceArea>
                    <ServiceTitle>Agende horários para alimentação</ServiceTitle>
                    <ServiceName>Cafe da Manha</ServiceName>
                    <ServiceItem>
                        <ServiceInfo>
                           
                            
                        </ServiceInfo>

                        <TimeList horizontal={true} showsHorizontalScrollIndicator>
                            {cafe.map(item =>(
                                <TimeItem
                                    key={item.key}
                                    onPress={() => item.status ? setSelectedCafe(item.name) :null}
                                    style={{backgroundColor: item.name === selectedCafe ? '': '#4EADBE'}}
                                >   
                                    <Text>{item.name} </Text>                                            
                                                
                                </TimeItem>
                            ))}

                                </TimeList>                            
                        
                        <ServiceChooseButton  onPress={() => handleServiceCafe}>
                            <ServiceChooseBtnText> Agendar</ServiceChooseBtnText>
                        </ServiceChooseButton>
                    </ServiceItem>

                    <ServiceName>Almoço</ServiceName>                 
                    <ServiceItem>                       

                        <TimeList horizontal={true} showsHorizontalScrollIndicator>
                            {almoco.map(item =>(
                                <TimeItem
                                key={item.key}
                                onPress={() =>{}}
                                style={{backgroundColor: item.name === selectedAlmoco ? '': '#4EADBE'}}
                                
                                >   
                                    <Text>{item.name} </Text>                                            
                                                
                                </TimeItem>
                            ))}

                                </TimeList>                            
                        
                        <ServiceChooseButton  onPress={() => handleServiceCafe}>
                            <ServiceChooseBtnText> Agendar</ServiceChooseBtnText>
                        </ServiceChooseButton>
                    </ServiceItem>

                    <ServiceName>Jantar</ServiceName>                 
                    <ServiceItem>
                        <TimeList horizontal={true} showsHorizontalScrollIndicator>
                            {janta.map(item =>(
                                <TimeItem
                                key={item.key}
                                onPress={() =>{}}
                                style={{backgroundColor: item.name === selectedJanta ? '': '#4EADBE'}}
                                
                                >   
                                    <Text>{item.name} </Text>                                            
                                                
                                </TimeItem>
                            ))}

                                </TimeList>                            
                        
                        <ServiceChooseButton  onPress={() => handleServiceCafe}>
                            <ServiceChooseBtnText> Agendar</ServiceChooseBtnText>
                        </ServiceChooseButton>
                    </ServiceItem>

                </ServiceArea>
                

                
                
            </Scroller>

            {/* <CafeModal>
                show={showModalCafe}
                setShow={setShowModalCafe}
            </CafeModal>

            <AlmocoModal>
                show={showModalAlmoco}
                setShow={setShowModalAlmoco}
            </AlmocoModal>

            <JantaModal>
                show={showModalJanta}
                setShow={setShowModalCafe}
            </JantaModal> */}
        </Container>
    )
}