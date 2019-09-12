import React, { PureComponent } from 'react'
import { Text, View,Image,StyleSheet,Dimensions } from 'react-native'
import bannerImage from '../../../../media/temp/banner.jpg'
const {height,width} = Dimensions.get('window')

export default class Collection extends PureComponent {
    render() {
        const {wraper,textStyle,imagestyle} = styles
        return (
            <View style = {wraper}>
                <View style = {{flex: 1}}>
                <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style = {{flex: 4}}>
                <Image source = {bannerImage} style = {imagestyle} />
                </View>
            </View>
        )
    }
}
//933 x465
const imageWidth = width - 40
const imageHeight = imageWidth / 933 *465
const styles= StyleSheet.create({
    wraper:{
       height: 220,
       backgroundColor: 'white',
       margin: 10,
       shadowColor: 'black',
       shadowOffset: {width:0,height:5},
       shadowOpacity: 0.2,
       padding:10
    },
    textStyle: {
        fontSize: 20,
        color: '#9e9e9e'
    },
    imagestyle:{
        height:imageHeight,
        width:imageWidth
    }
})
