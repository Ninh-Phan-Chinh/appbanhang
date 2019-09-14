import React, { PureComponent } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions'

import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from '../Cart/CartView';
const StackNavigator = createStackNavigator({
    CartView: { screen: CartView},
    ProductDetail: { screen: ProductDetail }
}, {
        initialRouteName: 'CartView',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});
export default createAppContainer(StackNavigator)
