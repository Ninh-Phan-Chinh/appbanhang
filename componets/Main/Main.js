import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Drawer from 'react-native-drawer'

import Menu from './Menu/Menu'
import Shop from './Shop/Shop'
export default class Main extends PureComponent {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<Menu navigation = {this.props.navigation}/>}
                openDrawerOffset={0.4}
                tapToClose={true}
            >
                <Shop open = {this.openControlPanel.bind(this)} navigation = {this.props.navigation}/>
            </Drawer>
        )
    }
}

{/* <TouchableOpacity
style={{backgroundColor: 'red'}}
onPress = {() =>{this.props.navigation.navigate('Authentication')}}
>
<Text>go to Authentication</Text>
</TouchableOpacity>
<TouchableOpacity
style={{backgroundColor: 'yellow'}}
onPress = {() =>{this.props.navigation.navigate('OrderHistory')}}
>
<Text>go to OrderHistory</Text>
</TouchableOpacity>
<TouchableOpacity
style={{backgroundColor: 'blue'}}
onPress = {() =>{this.props.navigation.navigate('ChangeInfo')}}
>
<Text>go to ChangeInfo</Text>
</TouchableOpacity> */}
