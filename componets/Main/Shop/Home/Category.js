import React, { PureComponent } from 'react'
import {
    Text, View, StyleSheet, Dimensions,
    ImageBackground, TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import Api from '../../../Api/Api'

const { height, width } = Dimensions.get('window')

export default class Collection extends PureComponent {
    constructor(props) {
        super(props);
        this.goToListProduct = this.goToListProduct.bind(this);
    }
    goToListProduct(category) {
        this.props.navigation.navigate('ListProduct', { category })
    }
    render() {
        const { types } = this.props
        const { wraper, textStyle, imagestyle, textImage } = styles
        const swiper = (
            <Swiper >
                {types.map(e => (
                    <TouchableOpacity onPress={() => this.goToListProduct(e)} key={e.id}>
                        <ImageBackground resizeMode='stretch' source={{ uri: `${Api}api/images/type/${e.image}` }} style={imagestyle} >
                            <Text style={textImage}>{e.name}</Text>
                        </ImageBackground >
                    </TouchableOpacity>
                ))}
            </Swiper>)
        return (
            <View style={wraper}>
                <View style={{ flex: 1 }}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{ flex: 5, }}>
                    {swiper}
                </View>

            </View>
        )
    }
}

const imageWidth = width - 40
const imageHeight = imageWidth / 800 * 400

const styles = StyleSheet.create({
    wraper: {
        height: 225,
        backgroundColor: 'white',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8,
        padding: 10,
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
    },
    textImage: {
        fontSize: 23,
        color: '#bdbdbd'
    }
})