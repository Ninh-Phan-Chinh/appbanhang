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
import CartsProduct from '../../Api/CartsProduct';
import InitData from '../../Api/InitData'
import SaveCart from '../../Api/SaveCart'
import GetCart from '../../Api/GetCart'

export default class Shop extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Home',
            types: [],
            topProducts: [],
            cartArray: []
        };
        CartsProduct.addProductToCart = this.addProductToCart.bind(this);
        CartsProduct.incrquantity = this.incrquantity.bind(this);
        CartsProduct.decrQuantity = this.decrQuantity.bind(this);
        CartsProduct.removeProduct = this.removeProduct.bind(this);
        CartsProduct.gotoSearch = this.gotosearch.bind(this);
    }

    componentDidMount() {
        InitData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProducts: product })
            });
        GetCart()
            .then(cartArray => this.setState({ cartArray }))
    }

    gotosearch() {
        this.setState({ selectedTab: 'Search' })
    }

    addProductToCart(product) {
        const isExist = this.state.cartArray.some(e => e.product.id === product.id)
        if (isExist) return false;
        this.setState({ cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
            () => SaveCart(this.state.cartArray)
        )
    }

    incrquantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity + 1 }
        });
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray))
    }

    decrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity - 1 }
        });
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray))
    }

    removeProduct(productId) {
        const newCart = this.state.cartArray.filter(e => e.product.id !== productId);
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray))
    }

    render() {
        const { iconStyle } = styles
        const { types, selectedTab, topProducts, cartArray } = this.state
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
                        <Home types={types} topProducts={topProducts} navigation={this.props.navigation} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Cart'}
                        title="Cart"
                        renderIcon={() => <Image source={cartS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={cart} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Cart' })}
                        badgeText={cartArray.length}
                    >
                        <Cart cartArray={cartArray} navigation={this.props.navigation} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Search'}
                        title="Search"
                        renderIcon={() => <Image source={searchS} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={search} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'Search' })}>
                        <Search navigation={this.props.navigation} />
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


