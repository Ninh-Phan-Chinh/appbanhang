import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {fromLeft} from 'react-navigation-transitions'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OrderHistory from '../OrderHistory/OrderHistory'
import ChangeInfo from '../ChangeInfo/ChangeInfo'
import Authentication from '../Authentication/Authentication'
import Main from '../Main/Main'
import Cart from '../Main/Shop/Cart/Cart'
import Home from '../Main/Shop/Home/Home'
import ListProduct from '../Main/Shop/ListProduct/ListProduct'
import ProductDetail from '../Main/Shop/ProductDetail/ProductDetail'
import Shop from '../Main/Shop/Shop'
import TopProduct from '../Main/Shop/ProductDetail/ProductDetail'

export default class Stack extends PureComponent{
    render(){
        const {categoryTypes} = this.props
        const {topProducts} = this.props
        const Appnavigator = createStackNavigator(
            {
                Authentication: { screen: Authentication },
                OrderHistory: { screen: OrderHistory },
                Main: { screen: Main },
                ChangeInfo: { screen: ChangeInfo },
                Cart: {screen: Cart, params: this.props},
                ListProduct: {screen: ListProduct},
                ProductDetail: {screen:ProductDetail,topProducts: {topProducts}},
                Home: {screen: Home, categoryTypes :{categoryTypes} },
                Shop: {screen: Shop}
                
            },
            {
                initialRouteName: 'Main',
                transitionConfig: ()=>fromLeft(500),
                headerMode: 'none'
            }
        )
        const A = createAppContainer(Appnavigator)
        return(
            <A/>
        )
    }
}





// const Appnavigator = createStackNavigator(
//     {
//         Authentication: { screen: Authentication },
//         OrderHistory: { screen: OrderHistory },
//         Main: { screen: Main },
//         ChangeInfo: { screen: ChangeInfo }
//     },
//     {
//         initialRouteName: 'Main',
//         transitionConfig: ()=>fromLeft(500),
//         headerMode: 'none'
//     }
// )

// export default createAppContainer(Appnavigator);
