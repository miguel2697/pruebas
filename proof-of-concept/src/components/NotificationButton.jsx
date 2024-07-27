import { View, Button } from 'react-native';
import useNotification from '../hooks/useNotification';

export default function NotificationButton() {
    const { scheduleNotification } = useNotification();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Set Notification" onPress={() => scheduleNotification('Hello stranger!', `I'm a test notification \\(^o^)/`, 5)} />
        </View>
    );
}
