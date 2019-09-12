import React, { PureComponent } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
export default class HomeView extends PureComponent {
    render() {
       const categoryTypes = this.props.navigation.state.params.categoryTypes
        const topProducts = this.props.navigation.state.params.topProducts;
        return (
            <ScrollView style={{flex:1, backgroundColor: '#e0e0e0'}}>
                <Collection/>
                <Category navigation = {this.props.navigation} categoryTypes = {categoryTypes}/>
                <TopProduct navigation = {this.props.navigation} topProducts={topProducts}/>
            </ScrollView>
        )
    }
}
