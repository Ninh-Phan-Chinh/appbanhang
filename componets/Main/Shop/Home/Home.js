import React, { PureComponent } from 'react'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';
import HomeView from './HomeView'



export default class Home extends PureComponent {
    render() {
        const StackNavigatior = createStackNavigator(
            {
                ListProduct : {screen : ListProduct},
                ProductDetail : {screen : ProductDetail},
                HomeView: {screen: HomeView, params: this.props },   
            },
            {
                initialRouteName: 'HomeView',
                headerMode:'none'
            }
        )
        const Stack = createAppContainer(StackNavigatior)
        // const {categoryTypes} = this.props
        return (
            <Stack/>
        )
    }
}

