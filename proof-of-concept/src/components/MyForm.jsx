import React, { useState } from 'react'
import { View, Alert, StyleSheet } from 'react-native'
import { MyInput, MyButton } from './index'

export default function MyForm({ onSubmit }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        if (onSubmit) onSubmit()
    }


    return (
        <View style={styles.formContainer}>
            <MyInput
                label="Nombre"
                value={name}
                onChangeText={setName}
                placeholder="Ingresa tu nombre"
            />
            <MyInput
                label="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                placeholder="Ingresa tu correo"
                keyboardType="email-address"
            />
            <MyButton title="Enviar" onPress={handleSubmit} />
        </View>
    )
}

// TODO pasar estilos a tailwind
const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
        width: '100%',
    },
})