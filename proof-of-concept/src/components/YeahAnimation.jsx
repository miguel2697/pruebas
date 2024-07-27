import LottieView from 'lottie-react-native';

export default function YeahAnimation() {

    return (
        <LottieView
            autoPlay
            style={{
                width: 200,
                height: 200,
            }}

            source={require('../../assets/animations/yeah.json')}
        />

    );
}
