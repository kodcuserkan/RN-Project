import React, { FC } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("screen")
interface Props {
    onPressFunc: () => void;
    title: string | number; 
    disabled?: boolean |  false;
}

const MyButton : FC<Props> = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 0.9*width,
        height: 45,
        marginVertical: 5,
        backgroundColor: 'orange',
        borderRadius: 8,
        marginTop: 15
    },
    text : {
        fontSize: 25,
        fontWeight: '600',
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        color: "white",
        padding: 4
    }
})

export default MyButton