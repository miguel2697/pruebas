import MyButton from './MyButton'
import useNotification from '../hooks/useNotification'

export default function NotificationButton() {
    const { scheduleNotification } = useNotification()

    const handlePress = () => {
        scheduleNotification('titulo', 'mensaje notificación', 5)
    }

    return (
        <MyButton
            title="Enviar Notificación"
            onPress={handlePress}
        />
    )
}