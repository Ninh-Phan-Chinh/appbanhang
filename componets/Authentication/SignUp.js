import React, { PureComponent } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,TextInput } from 'react-native'
import register from '../Api/register'

export default class SignUp extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        }
    }

    registerUser() {
        const {name,email, password} = this.state;
        register(email,name,password)
        .then(res =>{
            console.log(res);
        });
    }

    render() {
        const {  buttonText,bigButton,inputstyle} =styles
        return (
            <View>
            <TextInput 
                style={inputstyle} 
                placeholder='Enter your name'
                value ={this.state.name}
                onChangeText = {text =>this.setState({name: text})}
             />
            <TextInput 
                style={inputstyle} 
                placeholder='Enter your email' 
                value ={this.state.email}
                onChangeText = {text =>this.setState({email: text})}
            />
            <TextInput 
                style={inputstyle} 
                placeholder='Enter your Password' 
                value ={this.state.password}
                secureTextEntry
                onChangeText = {text =>this.setState({password: text})}
            />
            <TextInput 
                style={inputstyle} 
                placeholder='Re-enter your Password' 
                value ={this.state.rePassword}
                onChangeText = {text =>this.setState({rePassword: text})}
            />
            <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
                <Text style={buttonText}>SIGN UP NOW</Text>
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

