import React from "react";
import styled from "styled-components/native";




export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;


`;

export const Scroller = styled.ScrollView`
    
    flex: 1;
    flex: 1;
padding: 50px 10px;


`

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-evenly  ;
    align-items: center;
    alignSelf: center,
    

`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;



export const LocationArea = styled.View`
    background-color: #4EADBE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;

`;
export const LocationInput = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #FFF;

`;

export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;

export const LogoutIcon = styled.TouchableOpacity`
    width: 24px;

    height: 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ServiceArea= styled.View`

    margin-top: 20px;
`;

export const ServiceItem= styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ServiceInfo= styled.View`
    flex: 1;

`;

export const ServiceName= styled.Text`
    font-size: 16px;
    font-weight: bold:
    color: #268596;

    font-size: 18px;
    font-weight: bold;
    
    margin-left: 30px;
    margin-bottom: 30px;
    
`;

export const ServiceChooseButton= styled.TouchableOpacity`
    background-color: #268596;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    width: 75px;

    
    justify-content: center:
    align-items: center;
    width: 90px;
    height: 50px;
    
    

    
`;

export const ServiceChooseBtnText= styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
    padding-bottom: 5px;
    padding-top: 5px;
`;

export const ServiceTitle= styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #268596;
    margin-left: 30px;
    margin-bottom: 20px;
    
    
    


`;

export const TimeList= styled.ScrollView`



`;

export const TimeItem= styled.TouchableOpacity`
    width: 75px;
    
    justify-content: center:
    align-items: center:
    border-radius: 20px;
    padding-bottom: 5px;
    padding-top: 15px;

`;

export const TimeitemText= styled.TouchableOpacity`
    font-size: 14px;
`;

export const DateList= styled.ScrollView`

`;



















// Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder