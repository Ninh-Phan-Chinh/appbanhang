import React, { PureComponent } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

import map from '../../../../media/temp/map.jpg'
import location from '../../../../media/appIcon/location.png'
import phone from '../../../../media/appIcon/phone.png'
import mail from '../../../../media/appIcon/mail.png'
import massage from '../../../../media/appIcon/message.png'

export default class Contact extends PureComponent {
    render() {
        const  {container,text,styleMap,bodyMap,bodyContact,icon,contack} = styles
        return (
            <View style={container}>
                <View style = {bodyMap}>
                    <Image source = {map} style={styleMap}/>    
                </View>
                <View style = {bodyContact}>
                    <View style={contack}>
                        <Image source = {location} style = {icon}/>
                        <Text style={text}>67 Luy Ban Bich/Tan Phu</Text>
                    </View>
                    <View style={contack}>
                        <Image source = {phone} style = {icon}/>
                        <Text style={text}>(+84)352804047</Text>
                    </View>
                    <View style={contack}>
                        <Image source = {mail} style = {icon}/>
                        <Text style={text}>garapho85@gmail.com</Text>
                    </View>
                    <View style={contack}>
                        <Image source = {massage} style = {icon}/>
                        <Text style={text}>(+84)9877067707</Text>
                    </View>
                </View>          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#eeeeee'
    },
    bodyMap:{
        height:260,
        backgroundColor:'#eeeeee',
        justifyContent:'center',
        alignItems:'center'
    },
    styleMap:{
        height:230,
        width:325,
    },
    bodyContact:{
        flex:1,
        margin:10,
        backgroundColor:'white',
        justifyContent:'space-around',       
    },
    icon:{
        height:30,
        width:30,
    },
    contack:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        borderBottomWidth:1,
        borderColor: '#bdbdbd'
    },
    text:{
        color:'#ec407a'
    }
})


