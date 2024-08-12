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
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#FF8942',
        padding: 15,
        borderRadius: 15,
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