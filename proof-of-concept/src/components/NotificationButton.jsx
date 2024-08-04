import React from 'react'
import { Alert } from 'react-native'
import MyButton from './MyButton';

export default function NotificationButton() {
    const handlePress = () => {
        Alert.alert("Notificación enviada!")
    }

    return (
        <MyButton
            title="Enviar Notificación"
            onPress={handlePress}
        />
    )
};