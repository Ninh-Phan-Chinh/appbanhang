import React, { PureComponent } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
export default class HomeView extends PureComponent {
    render() {
       const {types,topProducts} = this.props
        return (
            <ScrollView style={{flex:1, backgroundColor: '#e0e0e0'}}>
                <Collection/>
                <Category navigation = {this.props.navigation} types ={types} />
                <TopProduct navigation = {this.props.navigation} topProducts={topProducts}/>
            </ScrollView>
        )
    }
}


// import React, { PureComponent } from 'react'

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

// import ProductDetail from '../ProductDetail/ProductDetail';
// import ListProduct from '../ListProduct/ListProduct';
// import HomeView from './HomeView'

// const StackNavigatior = createStackNavigator(
//     {
//         ListProduct : {screen : ListProduct},
//         ProductDetail : {screen : ProductDetail},
//         HomeView: {screen: HomeView },   
//     },
//     {
//         initialRouteName: 'HomeView',
//         headerMode:'none'
//     }
// )
// export default createAppContainer(StackNavigatior)

