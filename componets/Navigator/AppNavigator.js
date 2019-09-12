import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import {fromLeft} from 'react-navigation-transitions'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OrderHistory from '../OrderHistory/OrderHistory'
import ChangeInfo from '../ChangeInfo/ChangeInfo'
import Authentication from '../Authentication/Authentication'
import Main from '../Main/Main'

const Appnavigator = createStackNavigator(
    {
        Authentication: { screen: Authentication },
        OrderHistory: { screen: OrderHistory },
        Main: { screen: Main },
        ChangeInfo: { screen: ChangeInfo }
    },
    {
        initialRouteName: 'Main',
        transitionConfig: ()=>fromLeft(500),
        headerMode: 'none'
    }
)

export default createAppContainer(Appnavigator);

