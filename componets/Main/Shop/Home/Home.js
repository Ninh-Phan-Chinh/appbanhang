<<<<<<< HEAD
// import React, { PureComponent } from 'react'

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import ProductDetail from '../ProductDetail/ProductDetail';
// import ListProduct from '../ListProduct/ListProduct';
// import HomeView from './HomeView'



// export default class Home extends PureComponent {
//     render() {
//         const StackNavigatior = createStackNavigator(
//             {
//                 ListProduct : {screen : ListProduct},
//                 ProductDetail : {screen : ProductDetail},
//                 HomeView: {screen: HomeView, params: this.props },   
//             },
//             {
//                 initialRouteName: 'HomeView',
//                 headerMode:'none'
//             }
//         )
//         const Stack = createAppContainer(StackNavigatior)
//         // const {categoryTypes} = this.props
//         return (
//             <Stack/>
//         )
//     }
// }

import React, { PureComponent } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
export default class Home extends PureComponent {
    render() {
    //    const {navigation}  = this.props.navigation
    //    const categoryTypes = {categoryTypes};
    const {categoryTypes} = this.props
        const {topProducts} = this.props
        return (
            <ScrollView style={{flex:1, backgroundColor: '#e0e0e0'}}>
                <Collection/>
                <Category navigation = {this.props.navigation} categoryTypes = {categoryTypes}/>
                <TopProduct navigation = {this.props.navigation} topProducts={topProducts}/>
=======
import React, { PureComponent } from 'react'
import { ScrollView } from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
export default class HomeView extends PureComponent {
    render() {
        const { types, topProducts } = this.props
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
                <Collection navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} types={types} />
                <TopProduct navigation={this.props.navigation} topProducts={topProducts} />
>>>>>>> giaodien
            </ScrollView>
        )
    }
}
