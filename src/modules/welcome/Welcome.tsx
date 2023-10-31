import React, { useEffect } from "react";
import {
    View,
    Image,
    StyleSheet
} from "react-native"

import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack'

import icon_main_logo from '../../assets/icon_main_logo.png'

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            startLogin();
        },3000)
    },[])

    const startLogin = () => {
        navigation.replace('Login') // 跳到登录页
    }


    return (
        <View style={ styles.root }>
            <Image style={styles.logo_mian} source={icon_main_logo}></Image>
        </View>    
    )
}

const styles = StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        flexDirection:'column',
        alignItems:'center'
    },
    logo_mian:{
        width:200,
        height:105,
        marginTop:200,
        resizeMode:'contain'
    }
})