import React, { PureComponent } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,TextInput } from 'react-native'

export default class SignIn extends PureComponent {
    render() {
        const {  buttonText,bigButton,inputstyle} =styles
        return (
            <View>
                <TextInput style={inputstyle} placeholder='Enter your email' />
                <TextInput style={inputstyle} placeholder='Enter your password' />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
