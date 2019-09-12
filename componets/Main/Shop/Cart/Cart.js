import React, { PureComponent } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromLeft} from 'react-navigation-transitions'

import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from '../Cart/CartView';
export default class Cart extends PureComponent {
    render() {
        const StackNavigator = createStackNavigator({
            CartView: { screen: CartView, params: this.props },
            ProductDetail: { screen: ProductDetail }
        }, {
                initialRouteName: 'CartView',
                transitionConfig: () => fromLeft(1000),
                headerMode: 'none'
        });
        const Stack = createAppContainer(StackNavigator);
        return (
            <Stack />
        );
    }
}