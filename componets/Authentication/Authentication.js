import React, { PureComponent } from 'react'
import {
    Text, View, TouchableOpacity,
    Image, StyleSheet, TextInput
} from 'react-native'

import register from '../Api/register'
import icBack from '../../media/appIcon/back_white.png'
import iconLogo from '../../media/appIcon/ic_logo.png'

export default class Authentication extends PureComponent {
    constructor(props){
        super(props)
        this.state = {isSignIn: true}
    }

    componentDidMount() {
        register('long123','chinh long','123')
        .then(res =>console.log(res))
    }

    render() {
        const { icon1, iconStyle, styleTitle,
            inactiveStyle, activeStyle, buttonText,
            container, controlStyle, bigButton,
            signInstyle, signUpStyle, inputstyle } = styles

        const signInJSX = (
            <View>
                <TextInput style={inputstyle} placeholder='Enter your email' />
                <TextInput style={inputstyle} placeholder='Enter your password' />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        )
        const signUpJSX = (
            <View>
                <TextInput style={inputstyle} placeholder='Enter your name' />
                <TextInput style={inputstyle} placeholder='Enter your email' />
                <TextInput style={inputstyle} placeholder='Enter your Password' />
                <TextInput style={inputstyle} placeholder='Re-enter your Password' />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        )
        const {isSignIn} = this.state
        const mainJSX = isSignIn ? signInJSX :signUpJSX
        return (
            <View style={container}>
                <View style={icon1}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Main') }}>
                        <Image
                            source={icBack}
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styleTitle}>Wearing A Dress</Text>
                    <Image
                        source={iconLogo}
                        style={iconStyle}
                    />
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity 
                    style={signInstyle} 
                    onPress ={() =>{this.setState({isSignIn : true})}}
                    >
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={signUpStyle}
                    onPress ={() =>{this.setState({isSignIn : false})}}
                    >
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        padding: 20,
        justifyContent: 'space-between'
    },
    icon1: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    iconStyle: {
        width: 25, height: 25
    },
    styleTitle: {
        color: 'white', fontSize: 25
    },
    controlStyle: {
        flexDirection: 'row',
        width: 300
    },
    inactiveStyle: {
        color: '#eeeeee'
    },
    activeStyle: {
        color: 'green'
    },
    signInstyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 20,
        marginRight: 5,
        marginLeft:17,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    signUpStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 20,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    inputstyle: {
        height: 50,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 30,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    buttonText: {
        color: '#f5f5f5',
        fontSize: 20
    }
})

// <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Main')}}>
//                     <Text>Back Main</Text>
//                 </TouchableOpacity>