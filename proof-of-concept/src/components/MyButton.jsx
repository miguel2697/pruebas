import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function MyButton({ title = 'Iniciar', onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

// TODO pasar estilos a tailwind
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9b59b6',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})