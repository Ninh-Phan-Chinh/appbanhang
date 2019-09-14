import React, { PureComponent } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
export default class HomeView extends PureComponent {
    render() {
       
        return (
            <ScrollView style={{flex:1, backgroundColor: '#e0e0e0'}}>
                <Collection/>
                <Category navigation = {this.props.navigation}/>
                <TopProduct navigation = {this.props.navigation} />
            </ScrollView>
        )
    }
}
