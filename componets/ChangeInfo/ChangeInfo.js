import React, { PureComponent } from 'react'
import { Text, View,TouchableOpacity,Image,StyleSheet,TextInput } from 'react-native'

import iconBacks from '../../media/appIcon/backs.png'

export default class ChangeInfo extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            txtName: 'Chinh Ninh Phan',
            txtAddres: '67 Luy Ban Bich',
            txtPhone: '0352804047'
        }
    }
    
    render() {
        const {textButton,styleButton,container,header,styleIcon,styleText,textInput,body} = styles
        return (
            <View style={container}>
                <View style = {header}>
                    <View/>
                    <Text style={styleText}>User Infomation</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image source={iconBacks} style={styleIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput style ={textInput}
                                placeholder = 'Enter your name'
                                autoCapitalize = 'none'
                                value = {this.state.txtName}
                                onChangeText = {txtName => this.setState({...this.state,txtName})}
                    />
                    <TextInput style ={textInput}
                    placeholder = 'Enter your addres'
                    autoCapitalize = 'none'
                    value = {this.state.txtAddres}
                    onChangeText = {txtName => this.setState({...this.state,txtName})}
                    />
                    <TextInput style ={textInput}
                    placeholder = 'Enter your phone number'
                    autoCapitalize = 'none'
                    value = {this.state.txtPhone}
                    onChangeText = {txtName => this.setState({...this.state,txtName})}
                    />
                    <TouchableOpacity style = {styleButton}>
                        <Text style ={textButton}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    header:{
        height: 70,
        backgroundColor:'green',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    styleText:{
        fontSize: 20,
        color:'white'
    },
    styleIcon:{
        height:30,
        width:30,
    },
    body:{
        flex:1,
        justifyContent: 'center',
        margin: 20
    },
    textInput:{
        height:50,
        borderWidth:1,
        borderColor: 'green',
        borderRadius: 30, 
        paddingLeft: 20,
        fontSize: 20 ,
        marginBottom: 20    
    },
    styleButton:{
        height:50,
        backgroundColor: 'green',
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{

    }
})