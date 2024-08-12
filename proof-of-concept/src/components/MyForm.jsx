import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MyInput, MyButton } from './index'

export default function MyForm({ onSubmit }) {
    const [name, setName] = useState('')

    const handleSubmit = () => {
        if (onSubmit) onSubmit(name)
    }

    return (
        <View style={styles.formContainer}>
            <Text style={styles.title}>ZENENTI</Text>
            <View style={styles.inputContainer}>
                <MyInput
                    value={name}
                    onChangeText={setName}
                    placeholder="¿Cuál es tu nombre?"
                    style={styles.input}
                />
            </View>
            <MyButton style={styles.button} title="Enviar" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 40,
        backgroundColor: '#8A2BE2',
        marginBottom: 60,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        color: '#000000',
    },
})