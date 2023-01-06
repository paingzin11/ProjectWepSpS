import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  return (
    <View
    style={{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }}
>
    <LottieView
        source={require('../assets/Splash.json')}
        autoPlay
        loop={false}
        speed={0.5}
        onAnimationFinish={() => {
            console.log('Animation Finished!')
            navigation.push('Home');
        }}
    />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
