import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet } from 'react-native'

import MenuIcon from '../../../media/appIcon/ic_menu.png'
import LogoIcon from '../../../media/appIcon/ic_logo.png'

const height = Dimensions.get('window').height

export default class Header extends PureComponent {

    render() {
        const { wrapper, icon1, textInput, iconStyle, styleTitle } = styles
        return (
            <View style={wrapper}>
                <View style={icon1}>
                    <TouchableOpacity onPress={() => { this.props.openMenu('Menu') }}>
                        <Image
                            source={MenuIcon}
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styleTitle}>Wearing A Dress</Text>
                    <Image
                        source={LogoIcon}
                        style={iconStyle}
                    />
                </View>
                <View >
                    <TextInput style={textInput}
                        placeholder='What do you want to buy?'
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8, backgroundColor: 'green', padding: 10, justifyContent: 'space-around'
    },
    icon1: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between'
    },
    textInput: {
        backgroundColor: 'white', height: height / 20, padding: 5, paddingLeft: 10
    },
    iconStyle: {
        width: 25, height: 25
    },
    styleTitle: {
        color: 'white', fontSize: 25
    }
})

