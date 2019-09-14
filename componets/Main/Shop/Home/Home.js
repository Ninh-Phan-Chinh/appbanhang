import React, { PureComponent } from 'react'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';
import HomeView from './HomeView'

const StackNavigatior = createStackNavigator(
    {
        ListProduct : {screen : ListProduct},
        ProductDetail : {screen : ProductDetail},
        HomeView: {screen: HomeView },   
    },
    {
        initialRouteName: 'HomeView',
        headerMode:'none'
    }
)
export default createAppContainer(StackNavigatior)

