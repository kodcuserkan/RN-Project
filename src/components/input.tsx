import React, { FC } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import {TextInput} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("screen")
interface Props {
    onChangeText: (text: string) => void;
    placeholder: string;
    safeArea?: boolean;
    capitalize?: any; 
}

const Input : FC<Props> = props => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                secureTextEntry={props.safeArea || false} 
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText} 
                autoCapitalize={ props.capitalize || "none"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 0.9*width,
        marginVertical: 5,
        backgroundColor: '#a3a3a3',
        textAlign: "center",
        alignItems: "center",
        borderRadius: 8
    },
    input : {
        width: 0.9*width,
        height: 45,
        backgroundColor: '#fff',
        borderColor: "#000",
        padding:5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        fontSize: 23
    }
})

export default Input
