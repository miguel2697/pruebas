import { View, Button } from 'react-native';
import useNotification from '../hooks/useNotification';

export default function NotificationButton() {
    const { scheduleNotification } = useNotification();

    return (
        <Button
            title="Set Notification"
            onPress={() => scheduleNotification(
                'Hello stranger!',
                `I'm a test notification \\(^o^)/`,
                5
            )} />
    );
}
