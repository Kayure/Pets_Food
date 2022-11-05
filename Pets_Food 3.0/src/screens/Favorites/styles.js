import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`

    flex: 1;
    background-color: #63C2D1;
    
`;

export const HeaderTitle = styled.Text`
    width: 350px;
    
    font-size: 19px;
    font-weight: bold;
    color: #FFF;
    padding: 20px;
    align-items: center;
    
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;


`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

