import React, { PureComponent } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,Image,ScrollView } from 'react-native'

import iconBacks from '../../media/appIcon/backs.png'

export default class OrderHistory extends PureComponent {
    render() {
        const {container,header,styleText,styleIcon,History,
               o1,o2,styleTextO1} =styles
        return (
            <ScrollView style={container}>
                 {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListProduct') }}>
                                    <Text style={{ color: '#f06292' }}>SHOW DETAILS</Text>
                                </TouchableOpacity> */}
                <View style = {header}>
                    <View/>
                    <Text style={styleText}>Order History</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image source={iconBacks} style={styleIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={History}>
                    <View style={o1}>
                        <Text style = {styleTextO1}>Order id:</Text>
                        <Text style = {styleTextO1}>OrderTime:</Text>
                        <Text style = {styleTextO1}>Status:</Text>
                        <Text style = {styleTextO1}>Total:</Text>
                    </View>
                    <View style={o2}>
                        <Text style = {{color:'#00bcd4'}}>ORD15</Text>
                        <Text style = {{color:'#f48fb1'}}>2019-9-9 19:33:33</Text>
                        <Text style = {{color:'#00bcd4'}}>Pending</Text>
                        <Text style = {{color:'#e91e63'}}>400$</Text>
                    </View>
                </View>
                <View style={History}>
                    <View style={o1}>
                        <Text style = {styleTextO1}>Order id:</Text>
                        <Text style = {styleTextO1}>OrderTime:</Text>
                        <Text style = {styleTextO1}>Status:</Text>
                        <Text style = {styleTextO1}>Total:</Text>
                    </View>
                    <View style={o2}>
                        <Text style = {{color:'#00bcd4'}}>ORD15</Text>
                        <Text style = {{color:'#f48fb1'}}>2019-9-9 19:33:33</Text>
                        <Text style = {{color:'#00bcd4'}}>Pending</Text>
                        <Text style = {{color:'#e91e63'}}>400$</Text>
                    </View>
                </View>
                <View style={History}>
                    <View style={o1}>
                        <Text style = {styleTextO1}>Order id:</Text>
                        <Text style = {styleTextO1}>OrderTime:</Text>
                        <Text style = {styleTextO1}>Status:</Text>
                        <Text style = {styleTextO1}>Total:</Text>
                    </View>
                    <View style={o2}>
                        <Text style = {{color:'#00bcd4'}}>ORD15</Text>
                        <Text style = {{color:'#f48fb1'}}>2019-9-9 19:33:33</Text>
                        <Text style = {{color:'#00bcd4'}}>Pending</Text>
                        <Text style = {{color:'#e91e63'}}>400$</Text>
                    </View>
                </View>
                <View style={History}>
                    <View style={o1}>
                        <Text style = {styleTextO1}>Order id:</Text>
                        <Text style = {styleTextO1}>OrderTime:</Text>
                        <Text style = {styleTextO1}>Status:</Text>
                        <Text style = {styleTextO1}>Total:</Text>
                    </View>
                    <View style={o2}>
                        <Text style = {{color:'#00bcd4'}}>ORD15</Text>
                        <Text style = {{color:'#f48fb1'}}>2019-9-9 19:33:33</Text>
                        <Text style = {{color:'#00bcd4'}}>Pending</Text>
                        <Text style = {{color:'#e91e63'}}>400$</Text>
                    </View>
                </View>
                <View style={History}>
                    <View style={o1}>
                        <Text style = {styleTextO1}>Order id:</Text>
                        <Text style = {styleTextO1}>OrderTime:</Text>
                        <Text style = {styleTextO1}>Status:</Text>
                        <Text style = {styleTextO1}>Total:</Text>
                    </View>
                    <View style={o2}>
                        <Text style = {{color:'#00bcd4'}}>ORD15</Text>
                        <Text style = {{color:'#f48fb1'}}>2019-9-9 19:33:33</Text>
                        <Text style = {{color:'#00bcd4'}}>Pending</Text>
                        <Text style = {{color:'#e91e63'}}>400$</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eeeeee',       
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
    History:{
        height:120,      
        backgroundColor: 'white',
        margin:13,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    o1:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:7
    },
    o2:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginRight:7
    },
    styleTextO1:{
        color:'#9e9e9e',
        fontSize: 15
    }
})

