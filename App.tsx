import ForgetPassword from '@views/ForgetPassword';
import SignIn from '@views/SignIn';
import SignUp from '@views/SignUp';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<SignIn />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
