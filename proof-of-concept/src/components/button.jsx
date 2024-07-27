import React from 'react'
import { StyleSheet, Button, View, Text, Alert } from 'react-native'

export default function MyButtonComponent() {
    const handlePress = () => {
        Alert.alert("Bienvenido!")
    }

    return (
        <View style={styles.container}>
            <Text>Isabel Domínguez</Text>
            <Button
                title="Acceder"
                onPress={handlePress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        marginBottom: 20,
    },
})