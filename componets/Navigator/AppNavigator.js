import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { fromLeft } from 'react-navigation-transitions'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OrderHistory from '../OrderHistory/OrderHistory'
import ChangeInfo from '../ChangeInfo/ChangeInfo'
import Authentication from '../Authentication/Authentication'
import Main from '../Main/Main'
import ProductDetail from '../Main/Shop/ProductDetail/ProductDetail'
import ListProduct from '../Main/Shop/ListProduct/ListProduct'
import refreshToken from '../Api/refreshToken'

export default class A extends Component {
    componentDidMount() {
        // setInterval(refreshToken,30000);
    }
    render() {
        const Appnavigator = createStackNavigator(
            {
                Authentication: { screen: Authentication },
                OrderHistory: { screen: OrderHistory },
                ChangeInfo: { screen: ChangeInfo },
                ProductDetail: { screen: ProductDetail },
                ListProduct: { screen: ListProduct },
                Main: { screen: Main }
            },
            {
                initialRouteName: 'Main',
                transitionConfig: () => fromLeft(500),
                headerMode: 'none'
            }
        )
        const A = createAppContainer(Appnavigator)
        return (
            <A />
        )
    }
}
