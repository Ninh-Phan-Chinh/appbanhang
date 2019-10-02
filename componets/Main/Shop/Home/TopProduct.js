import React, { PureComponent } from 'react'
import { FlatList, Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'

import Api from '../../../Api/Api'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

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
                <FlatList
                    contentContainerStyle={body}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    data={topProducts}
                    renderItem={({ item }) => (
                        < TouchableOpacity onPress={() => {
                            this.navigateDetail(item)
                        }}
                            style={titleBody}
                        >
                            <Image source={{ uri: `${Api}api/images/product/${item.images[0]}` }} style={image} />
                            <Text style={productName}>{toTitleCase(item.name)}</Text>
                            <Text style={productPrice}>{item.price}$</Text>
                        </TouchableOpacity >
                    )}
                />
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
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8
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
        justifyContent: 'space-between',
        margin: 3,
        marginBottom: 15,
        backgroundColor: 'white',
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8
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
