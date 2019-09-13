import React, { PureComponent } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/Home'
import Cart from './Cart/Cart'
import Contact from './Contact/Contact'
import Search from './Search/Search'
import Header from './Header'
import iconHomeS from '../../../media/appIcon/home0.png'
import iconHome from '../../../media/appIcon/home.png'
import cartS from '../../../media/appIcon/cart0.png'
import cart from '../../../media/appIcon/cart.png'
import searchS from '../../../media/appIcon/search0.png'
import search from '../../../media/appIcon/search.png'
import contactS from '../../../media/appIcon/contact0.png'
import contact from '../../../media/appIcon/contact.png'
import Api from '../../Api/Api'
import CartsProduct from '../../Api/CartsProduct';
import InitData from '../../Api/InitData'
import SaveCart from '../../Api/SaveCart'
import GetCart from '../../Api/GetCart'

export default class Shop extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
             selectedTab: 'Home',
             categoryTypes: [],
             topProducts: [],
             cartArray: [0]
     };
     CartsProduct.addProductToCart = this.addProductToCart.bind(this)
    }
    componentDidMount() {
        InitData()
        .then(resJSON => {
            this.setState({ categoryTypes: resJSON.type, topProducts: resJSON.product });
        });
        GetCart()
        .then(cartArray => this.setState({ cartArray }))
    }
    addProductToCart(product) {
        this.setState(
            { cartArray: this.state.cartArray.concat({product, quantity: 1}) },
        () =>SaveCart(this.state.cartArray)
        );
    }
    render() {
        const { iconStyle } = styles
        const {categoryTypes, selectedTab,topProducts,cartArray} = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header openMenu={this.props.open}
                />

                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'Home'}
                        title="Home"
                        renderIcon={() => <Image source={iconHomeS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={iconHome} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Home' })}>
                        <Home categoryTypes = {categoryTypes} topProducts = {topProducts}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cart} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                        badgeText={cartArray.length}
                    >
                        <Cart cartArray={cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={searchS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={search} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Search' })}>
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Contact'}
                        title="Contact"
                        renderIcon={() => <Image source={contactS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={contact} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Contact' })}>
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 25, height: 25
    }
})


