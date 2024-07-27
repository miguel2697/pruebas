import { useEffect, useState, useRef } from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        try {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                Alert.alert('Failed to get push token for notifications');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync({ projectId: process.env.PROJECT_ID })).data;
        } catch (error) {
            console.error(error.message)
        }
    } else {
        Alert.alert('Must use physical device for notifications');
    }



    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}

export default function useNotification() {

    useEffect(() => {
        try {
            registerForPushNotificationsAsync();
        } catch (error) {
            Alert.alert(error.message)
        }

    }, []);

    const scheduleNotification = async (title, body, seconds) => {
        try {
            await Notifications.scheduleNotificationAsync({
                content: { title, body },
                trigger: { seconds },
            });
            console.log(`Notification "${title}: ${body}" set for the next ${seconds} seconds`)
            Alert.alert(`Notification set for the next ${seconds} seconds`);
        } catch (error) {
            console.error(error.message)
        }
    };

    return { scheduleNotification }

};
