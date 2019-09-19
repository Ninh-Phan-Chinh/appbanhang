import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity,StyleSheet,Image,ScrollView } from 'react-native'

import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'

function toTitLeCase(str){
    return str.replace(/\w\s*/g,txt.charAt(0).teUpperCase() + txtsubstr(1).toLowerCase())
}

export default class SearchView extends PureComponent {
    render() {
        const {container,styleBody,styleParty,styleNameSp1,styleMoney
            , materialStyle,styleTouopcity,styleTextColor,colorStyle,styleShow,informationStyle} = styles
        return (
            <ScrollView style={container}>
                <View style={styleBody}>
                        <Image source = {sp3} style = {styleParty}/>
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
                        <Image source = {sp4} style = {styleParty}/>
                        <View style={informationStyle}>
                            <Text style={styleNameSp1}>Lace Sleeve Si</Text>
                            <Text style={styleMoney}>117$</Text>
                            <Text style={materialStyle}>Material silk</Text>
                            <View style={styleTouopcity}>
                                <Text style={styleTextColor}>Color Gainsboro</Text>
                                <View style={colorStyle}/>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetail')}}>
                                    <Text style={styleShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </ScrollView>
             
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#eeeeee'
    },
    styleBody:{
        height:145,
        backgroundColor:'white',
        margin:10,
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
    },
    informationStyle:{
        justifyContent: 'space-between'
    }
})
