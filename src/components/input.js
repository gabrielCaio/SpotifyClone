import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

export default ({ placeholder, value, onChangeText }) => {

    const [focus, setFocus] = React.useState(false)

    return (
        <View style={style.container(focus)} >
            <TextInput 
                placeholder={placeholder}
                placeholderTextColor="#f2f2f2"
                value={value}
                onChangeText={onChangeText}
                style={style.input}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: (focus) => ({
        width: '100%',
        height: 50,
        backgroundColor: focus ? "#5c5c5c" : "#2c2c2c",
        borderRadius: 5,
        marginBottom: 20
    }),
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        color: '#f2f2f2'
    }
})