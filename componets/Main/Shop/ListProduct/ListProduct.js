import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Image,ScrollView } from 'react-native'

import iconParty1 from '../../../../media/appIcon/party.jpeg'
import iconBack from '../../../../media/appIcon/back.png'
export default class ListProduct extends PureComponent {
    render() {
        const { constainer, header,inContainer,styleShow,colorStyle,
                iconStyle,textIcon,styleBody,styleParty,informationStyle
                ,styleNameSp1,styleMoney,materialStyle,styleTextColor
                 ,styleTouopcity  } = styles
        return (
            <ScrollView style={constainer}>
                <View style = {inContainer}>
                    <View style={header}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image source = {iconBack} style={iconStyle}/>
                        </TouchableOpacity>
                        <Text style={textIcon}>Party Dress</Text>                     
                    </View>
                    <View style={styleBody}>
                        <Image source = {iconParty1} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styleBody}>
                        <Image source = {iconParty1} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styleBody}>
                        <Image source = {iconParty1} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styleBody}>
                        <Image source = {iconParty1} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styleBody}>
                        <Image source = {iconParty1} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    inContainer:{
        flex:1,
        backgroundColor:'white',
        margin:12,
        borderRadius:10
    },
    header: {
        height:50,
        borderBottomWidth:1,
        borderColor:'#efebe9',
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
    },
    iconStyle:{
        height:30,
        width:30
    },
    textIcon:{
        color: '#ec407a',
        fontSize: 20,
        marginRight:100
    },
    styleBody:{
        height:150,
        borderBottomWidth:1,
        borderColor:'#efebe9',
        marginRight: 10,
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    styleParty:{
        width:80,
        height:120,
        marginTop: 10
    },
    informationStyle:{
        justifyContent: 'space-between'
    }  ,
    styleNameSp1:{
        fontSize:25,
        color:'#efebe9'
    } ,
    styleMoney:{
        color: '#ec407a'
    },
    materialStyle:{
        fontSize: 15
    },
    styleTouopcity:{
        height:45,
        flexDirection:'row',       
    },
    styleTextColor:{
        fontSize:15
    },
    colorStyle:{
        height:20,
        width:20,
        borderRadius:10,
        backgroundColor:'gainsboro',
        marginRight:5,
        marginLeft:5
    },
    styleShow:{
        fontSize:12,
        color:'#ec407a'
    }
})
