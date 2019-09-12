import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppNavigator from './componets/Navigator/AppNavigator'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppNavigator/>
      </View>
    )
  }
}
