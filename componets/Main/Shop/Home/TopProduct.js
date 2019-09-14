import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'

import sp1 from '../../../../media/temp/sp1.jpeg'
import sp2 from '../../../../media/temp/sp2.jpeg'
import sp3 from '../../../../media/temp/sp3.jpeg'
import sp4 from '../../../../media/temp/sp4.jpeg'

import Api from '../../../Api/Api'

export default class TopProduct extends PureComponent {
    constructor(props) {
        super(props);
        this.navigateDetail = this.navigateDetail.bind(this);
    }
    navigateDetail(productItem) {
        this.props.navigation.navigate('ProductDetail', { productItem });
    }
    render() {
        const { topProducts } = this.props
        const { container, title, titleContainer,
            body, titleBody, image, productName, productPrice } = styles
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}> Top  Product </Text>
                </View>
                <View style={body}>
                    < TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ProductDetail')
                    }}>
                        <View style={{ titleBody }}>
                            <Image source={sp1} style={image} />
                            <Text style={productName}>PRODUCT NAME</Text>
                            <Text style={productPrice}>550$</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ProductDetail')
                    }}>
                        <View style={{ titleBody }}>
                            <Image source={sp2} style={image} />
                            <Text style={productName}>PRODUCT NAME</Text>
                            <Text style={productPrice}>420$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ProductDetail')
                    }}>
                        <View style={{ titleBody }}>
                            <Image source={sp3} style={image} />
                            <Text style={productName}>PRODUCT NAME</Text>
                            <Text style={productPrice}>550$</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ProductDetail')
                    }}>
                        <View style={{ titleBody }}>
                            <Image source={sp4} style={image} />
                            <Text style={productName}>PRODUCT NAME</Text>
                            <Text style={productPrice}>420$</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const { width } = Dimensions.get('window');
const produtWidth = (width - 50) / 2;
const productImageHeight = produtWidth / 361 * 452

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#ff8a80',
        fontSize: 20
    },
    body: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1
    },
    titleBody: {
        width: produtWidth,
    },
    image: {
        width: produtWidth,
        height: productImageHeight,
        marginRight: 5,
        marginLeft: 5
    },
    productName: {
        paddingLeft: 10,
    },
    productPrice: {
        paddingLeft: 10
    }
})

//     < TouchableOpacity onPress = {() => {
//     this.props.navigation.navigate('ProductDetail')
// }}>
//     <View style={{ titleBody }}>
//         <Image source={sp1} style={image} />
//         <Text style={productName}>PRODUCT NAME</Text>
//         <Text style={productPrice}>550$</Text>
//     </View>
//                     </TouchableOpacity >
//     <TouchableOpacity onPress={() => {
//         this.props.navigation.navigate('ProductDetail')
//     }}>
//         <View style={{ titleBody }}>
//             <Image source={sp2} style={image} />
//             <Text style={productName}>PRODUCT NAME</Text>
//             <Text style={productPrice}>420$</Text>
//         </View>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => {
//         this.props.navigation.navigate('ProductDetail')
//     }}>
//         <View style={{ titleBody }}>
//             <Image source={sp3} style={image} />
//             <Text style={productName}>PRODUCT NAME</Text>
//             <Text style={productPrice}>550$</Text>
//         </View>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => {
//         this.props.navigation.navigate('ProductDetail')
//     }}>
//         <View style={{ titleBody }}>
//             <Image source={sp4} style={image} />
//             <Text style={productName}>PRODUCT NAME</Text>
//             <Text style={productPrice}>420$</Text>
//         </View>
//     </TouchableOpacity>
