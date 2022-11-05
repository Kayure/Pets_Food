import React, {useState, useEffect} from "react";
import { Text, Button } from "react-native";
import {Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder, LoadingIcon, ListArea, LogoutIcon} from './styles';
import { useNavigation } from "@react-navigation/native";

import { RefreshControl } from 'react-native';



import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import Api from "../../Api";
import BarberItem from '../../components/BarberItem'
import Stars from '../../components/Stars'
import Logout1 from '../../assets/logout1'
import Logout2 from '../../assets/logout2'



export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    //FUNÇÃO LOGOUT

    const handleLogoutClick = async() => {

        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });

    }

    //FUNÇÃO QUE PEGA A LOCALIZAÇÃO DO USUARIO
    const handleLocationFinder = async () => {

        console.log(res);
        
        getBarbers();
            setLoading(true);
            setLocationText('');
            setList([]);

    }
      

    //FUNÇÃO QUE PEGA OS BARBEIROS
    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        //SETEI MANUAL A LATITUDE E LONGITUDE PQ N ESTOU CONSEGUINDO PEGAR SOZINHO
        let lat = 37.421998333333332;
        let lng = -122.084000000000022;
        

        let res = await Api.getBarbers(lat, lng, locationText);
        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }
            setList(res.data);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getBarbers();
    }, []);
    
    const onRefresh = () => {
        setRefreshing(false);
        getBarbers();
    }

    const handleLocationSearch = () => {
        setCoords({});
        getBarbers();
    }


    

    return (
        <Container>
            
            <Scroller RefreshControl={
                <RefreshControl refreshing={refreshing} on onRefresh={onRefresh} />
            } >
                
                <HeaderArea>
                <Logout1  onPress={null} />
               
                    <HeaderTitle> Meus Pets: </HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF" />
                    </SearchButton>
                </HeaderArea>

                {/* <LocationArea>

                    <LocationInput placeholder="Onde vocês está?" placeholderTextColor="#FFF" value={locationText} onChangeText={t=>setLocationText(t)} />

                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFF" />
                    </LocationFinder>
                </LocationArea> */}
                {/* {loading && 
                    <LoadingIcon size="large" color="#FFF" />
                } */}

                <ListArea>
                    {list.map((item, k)=> (
                        <BarberItem key={k} data={item} />
                    ))}
                </ListArea>
                
            </Scroller>
        </Container>
    )
}