import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import styles from "./style.js"

import Input from '../../components/input'

export default () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    function handleLoginPress() {
        alert("Login!")
    }

    return (
        <SafeAreaView style={style.container} >
                <Text style={style.text} >Login</Text>
                
                <View style={style.inputArea} >
                    <Input 
                        placeholder="E-mail or Username"
                        value={email}
                        onChangeText={t=>setEmail(t)}
                    />
                    <Input 
                        placeholder="Password"
                        value={pwd}
                        onChangeText={t=>setPwd(t)}
                    />
                </View>

                <View style={style.buttonArea} >
                    <TouchableOpacity style={style.loginButton} onPress={handleLoginPress} >
                        <Text style={style.button1Text} >LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.loginWPButton} onPress={handleLoginPress} >
                        <Text style={style.button2Text} >LOGIN WITHOUT PASSWORD</Text>
                    </TouchableOpacity>
                </View>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: "#0f0f0f",
        padding: 20
    },
    text : {
        color: "#f2f2f2",
        fontSize: 20
    },
    inputArea: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonArea: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: "#f2f2f2",
        height: 60,
        width: '50%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    loginWPButton: {
        backgroundColor: "#000",
        height: 30,
        // width: '60%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 30,
        borderColor: "#f2f2f2",
        borderWidth: 1
    },
    button1Text: {
        color: "#000",
        fontSize: 20
    },
    button2Text: {
        color: "#fff"
    },
})