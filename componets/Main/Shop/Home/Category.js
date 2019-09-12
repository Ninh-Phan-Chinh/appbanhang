import React, { PureComponent } from 'react'
import {
    Text, View, Image, StyleSheet, Dimensions,
    ImageBackground, ScrollView, TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import Api from '../../../Api/Api'
import littleIcon from '../../../../media/temp/little.jpg'
import maxIcon from '../../../../media/temp/maxi.jpg'
import partyIcon from '../../../../media/temp/party.jpg'

const { height, width } = Dimensions.get('window')

export default class Collection extends PureComponent {
    render() {
        const { categoryTypes } = this.props;
        const { wraper, textStyle, imagestyle, textImage } = styles
        return (
            <View style={wraper}>
                <View style={{ flex: 1 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 5, }}>
                    <Swiper >
                   
                            
                            
                        {categoryTypes.map(e => (
                             <TouchableOpacity key ={e.id} onPress={() => {
                                this.props.navigation.navigate('ListProduct')
                            }}>
                                <ImageBackground  resizeMode='stretch' source={{ uri: `${Api}api/images/type/${e.image}` }} style={imagestyle}>
                                    <Text style={textImage}>{e.name}</Text>
                                </ImageBackground >
                            </TouchableOpacity>
                        ))}

                        
                    </Swiper>

                </View>


            </View>
        )
    }
}
//933 x465
const imageWidth = width - 40
const imageHeight = imageWidth / 800 * 400

const styles = StyleSheet.create({
    wraper: {
        height: 225,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        padding: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#9e9e9e'
    },
    imagestyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
        // marginBottom: 50
    },
    textImage: {
        fontSize: 23,
        color: '#bdbdbd'
    }
})


{/* <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ListProduct')
                        }}>
                            <ImageBackground resizeMode='stretch' source={maxIcon} style={imagestyle} >
                                <Text style={textImage}>Maxi Dress</Text>
                            </ImageBackground >
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('ListProduct')
                        }}>
                            <ImageBackground resizeMode='stretch' source={partyIcon} style={imagestyle} >
                                <Text style={textImage}>Maxi Dress</Text>
                            </ImageBackground >
                        </TouchableOpacity> */}