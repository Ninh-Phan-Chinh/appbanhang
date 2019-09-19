// import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {fromLeft} from 'react-navigation-transitions'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OrderHistory from '../OrderHistory/OrderHistory'
import ChangeInfo from '../ChangeInfo/ChangeInfo'
import Authentication from '../Authentication/Authentication'
import Main from '../Main/Main'
import ProductDetail from '../Main/Shop/ProductDetail/ProductDetail'
import ListProduct from '../Main/Shop/ListProduct/ListProduct'

import React, { PureComponent } from 'react'
// import { Text, View } from 'react-native'

export default class A extends PureComponent {
    render() {
        const Appnavigator = createStackNavigator(
            {
                Authentication: { screen: Authentication },
                OrderHistory: { screen: OrderHistory },
                Main: { screen: Main },
                ChangeInfo: { screen: ChangeInfo },
                ProductDetail: {screen: ProductDetail},
                ListProduct: {screen: ListProduct}
            },
            {
                initialRouteName: 'Main',
                transitionConfig: ()=>fromLeft(500),
                headerMode: 'none'
            }
        )
        const A = createAppContainer(Appnavigator)
        return (
            <A/>
        )
    }
}


// const Appnavigator = createStackNavigator(
//     {
//         Authentication: { screen: Authentication },
//         OrderHistory: { screen: OrderHistory },
//         Main: { screen: Main },
//         ChangeInfo: { screen: ChangeInfo },
//         ProductDetail: {screen: ProductDetail},
//         ListProduct: {screen: ListProduct}
//     },
//     {
//         initialRouteName: 'Main',
//         transitionConfig: ()=>fromLeft(500),
//         headerMode: 'none'
//     }
// )

// export default createAppContainer(Appnavigator);

