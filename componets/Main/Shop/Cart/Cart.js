import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'

import iconParty1 from '../../../../media/appIcon/party.jpeg'

import Api from '../../../Api/Api'
import CartsProduct from '../../../Api/CartsProduct'

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class Cart extends PureComponent {
    incrQuantity(id) {
        CartsProduct.incrquantity(id);
    }

    decrQuantity(id) {
        CartsProduct.decrQuantity(id)
    }

    removeProduct(id) {
        CartsProduct.removeProduct(id);
    }

    navigateDetail(productItem) {
        this.props.navigation.navigate('ProductDetail', { productItem });
    }
    render() {
        const { cartArray } = this.props
        const { container, styleDress, styleImage, stylecA3,
            styleNumber, styleA2, body, styleLast } = styles
        const arrTotal = cartArray.map(e => e.product.price * e.quantity);
        const total =arrTotal.length ? arrTotal.reduce((a,b) => a+b) : 0 ;
        return (
            <View style={container}>
                <ScrollView style={body}>
                    {cartArray.map(cartItem => (
                        <View  style={styleDress}>
                            <Image source={{uri: `${Api}api/images/product/${cartItem.product.images[0]}`}} style={styleImage} />
                            <View style={styleA2}>
                                <Text style={{ fontSize: 16, color: '#9e9e9e' }}>{toTitleCase(cartItem.product.name)}</Text>
                                <Text style={{ fontSize: 17, color: '#e91e63' }}>{cartItem.product.price}$</Text>
                                <View style={styleNumber}>
                                    <TouchableOpacity onPress = {() => this.incrQuantity(cartItem.product.id)}>
                                        <Text style={{ fontSize: 20,marginTop: 5 }} >+</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20,marginTop: 5 }}>{cartItem.quantity}</Text>
                                    <TouchableOpacity onPress = {() => this.decrQuantity(cartItem.product.id)}>
                                        <Text style={{ fontSize: 30 }}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={stylecA3}>
                                <TouchableOpacity onPress={() =>this.removeProduct(cartItem.product.id)}>
                                    <Text style={{ fontSize: 20 }}>X</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.navigateDetail(cartItem.product)}>
                                    <Text style={{ color: '#f06292' }}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </ScrollView>

                <TouchableOpacity style={styleLast}>
                    <Text> TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    styleDress: {
        height: 150,
        backgroundColor: 'white',
        borderRadius: 3,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 15
    },
    styleImage: {
        height: 120,
        width: 80,
        marginTop: 5
    },
    styleA2: {
        justifyContent: 'space-between',
        marginLeft: 5
    },
    styleNumber: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    stylecA3: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginLeft: 15
    },
    body: {
        height: 100,
        backgroundColor: '#eeeeee',
        marginTop: 9,
        marginRight: 9,
        marginLeft: 9,
    },
    styleLast: {
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 10
    }
})


{/* <View style = {styleDress}>
                    <Image source={iconParty1} style={styleImage}/>
                    <View style={styleA2}>
                        <Text style = {{fontSize: 20,color:'#9e9e9e'}}>Lace Sleeve Si</Text>
                        <Text style = {{fontSize: 20,color:'#e91e63'}}>227$</Text>
                        <View style = {styleNumber}>
                        <TouchableOpacity onPress = {()=>{this.setState({value: this.state.value +1})}}>
                            <Text style={{fontSize:25}} >+</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:20}}>{this.state.value}</Text>
                        <TouchableOpacity onPress = {()=>{this.setState({value: this.state.value -1 < 0? 0:this.state.value -1 })}}>
                            <Text style={{fontSize:25}}>-</Text>
                        </TouchableOpacity>    
                        </View>                                        
                    </View>
                    <View style={stylecA3}>
                        <TouchableOpacity>
                            <Text style={{fontSize:17}}>X</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('ProductDetail')}}>
                            <Text style={{color:'#f06292'}}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
               </View> */}


// import React, { PureComponent } from 'react';
// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {fromLeft} from 'react-navigation-transitions'

// import ProductDetail from '../ProductDetail/ProductDetail';
// import CartView from '../Cart/CartView';
// const StackNavigator = createStackNavigator({
//     CartView: { screen: CartView},
//     ProductDetail: { screen: ProductDetail }
// }, {
//         initialRouteName: 'CartView',
//         transitionConfig: () => fromLeft(1000),
//         headerMode: 'none'
// });
// export default createAppContainer(StackNavigator)
