import React from "react";

import {
    View,
    Text,
    Button
} from "react-native";

import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    const onButtonPress = () => {
        navigation.navigate('PageB')
    }

    return (
        <View style={{
            width:'100%',
            height:'100%',
            backgroundColor:'#c0c0c0',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text style={{
                fontSize:40,
                color:'#333',
                fontWeight:'bold'
            }}>页面B</Text>
            <Button title="跳转到页面A" onPress={onButtonPress} />
        </View>    
    )
}