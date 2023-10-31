import React,{ useState } from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    Linking
} from "react-native"

import icon_main_logo from '../../assets/icon_main_logo.png'
import icon_unselected from '../../assets/icon_unselected.png'
import icon_selected from '../../assets/icon_selected.png'
import icon_arrow from '../../assets/icon_arrow.png'
import icon_wx from '../../assets/icon_wx.png'

export default () => {

    const [loginType,setLoginType] = useState<'quick' | 'input'>('quick');
    const [check,setCheck] = useState<boolean>(false)


    const renderQuickLogin = () => {

        const styles = StyleSheet.create({
            root:{
                width:'100%',
                height:'100%',
                flexDirection:'column-reverse',
                alignItems:'center',
                paddingHorizontal:56,
            },
            protocolLayout:{
                width:'100%',
                flexDirection:'row',
                alignItems:'center',
                marginBottom:40
            },
            radioButton:{
                width:16,
                height:16,
            },
            labeltxt:{
                fontSize:12,
                color:'#999',
                marginLeft:6,
            },
            protocolTxt:{
                fontSize:12,
                color:'#1020ff'
            },
            otherLoginButton:{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:20,
                paddingHorizontal:10,
                marginBottom:100,
            },
            otherLoginTxt:{
                fontSize:16,
                color:'#303080'
            },
            icon_arrow: {
                width:16,
                height:16,
                resizeMode:'contain',
                marginLeft:6,
                transform:[{
                    rotate:'180deg'
                }]
            },
            wxLoginButton:{
                width:'100%',
                height:56,
                backgroundColor:'#05c160',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
                borderRadius:28
            },
            icon_wx:{
                width:40,
                height:40,

            },
            wxLoginTxt:{
                fontSize:18,
                color:'whit',
                marginLeft:6,
            },
            oneKeyLoginButton:{
                width:'100%',
                height:56,
                backgroundColor:'#ff2442',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'row',
                borderRadius:28,
                marginBottom:20,                
            },
            oneKeyLoginTxt:{
                fontSize:18,
                color:'white',
                marginLeft:6
            },
            logoMain:{
                width:180,
                height:95,
                resizeMode:'contain',
                position:'absolute',
                top:170,
            }
        }) 

        return (
            <View style={ styles.root }>
                <View style={ styles.protocolLayout }>   
                    <TouchableOpacity
                        onPress={() => {
                            setCheck(!check)
                        }}
                    >
                        <Image
                            style={styles.radioButton}
                            source={check ? icon_selected : icon_unselected}
                        />
                    </TouchableOpacity>
                    <Text style={styles.labeltxt}>我已阅读并同意</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL('http://www.baidu.com ')
                        }}
                    >
                        <Text style={styles.protocolTxt}>《用户协议》和《隐私政策》</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={ styles.otherLoginButton } 
                    onPress={() => {
                        setLoginType((type: 'quick' | 'input') => {
                            if(type === 'quick'){
                                return 'input';
                            }
                            return 'quick'
                        })
                    }}
                >
                    <Text style={styles.otherLoginTxt}>其它登陆方式</Text>
                    <Image style={styles.icon_arrow} source={icon_arrow}/>
                </TouchableOpacity>              

                <TouchableOpacity style={ styles.wxLoginButton } activeOpacity={0.7}>
                    <Image style={styles.icon_wx} source={icon_wx}/>
                    <Text style={styles.wxLoginTxt}>微信登录</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.oneKeyLoginButton } activeOpacity={0.7}>
                    <Text style={styles.oneKeyLoginTxt}>一键登陆</Text>
                </TouchableOpacity> 

                <Image style={styles.logoMain} source={icon_main_logo} />                              
            </View>    
        )
    }

    const renderInputLogin = () => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View>
            {
                loginType === 'quick' ? renderQuickLogin() : renderInputLogin()
            }
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