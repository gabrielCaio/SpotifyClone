import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default () => {
    return (
        <SafeAreaView style={style.container} >
            <Text style={style.text} >Home</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})