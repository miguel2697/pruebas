import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyForm from './MyForm'

export default function WelcomePage({ onFormSubmit }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a Ommente 🧘‍♀️!</Text>
            <MyForm onSubmit={onFormSubmit} />
        </View>
    )
}

// TODO pasar estilos a tailwind
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 60,
    },
})