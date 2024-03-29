import React from "react";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`

    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
   

`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;



`;

export const CustomButton = styled.TouchableOpacity`
    height: 10%;
    width: 100%;
    background-color: #268596;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;


`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;

`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #268596;

`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;

`;

export const Picker = styled.View`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;

`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;





// InputArea, CustomButton, CustomButtonText,SignMessageButton, SignMessageButtonText, SignMessageButtonTextBold
