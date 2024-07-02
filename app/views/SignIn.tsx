import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import CustomKeyAvoidingView from '@ui/CustomKeyAvoidingView';
import FormDivider from '@ui/FormDivider';
import FormInput from '@ui/FormInput';
import FormNavigator from '@ui/FormNavigator';
import { AuthStackParamList } from 'app/navigator/AuthNavigator';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeHeader from '../ui/WelcomeHeader';

interface Props {}

const SignIn: FC<Props> = (props) => {
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const [userInfo, setUserInfo] = useState({ email: '', password: '' });
	const { email, password } = userInfo;

	const handleChange = (name: string) => (value: string) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleSubmit = () => {
		console.log(userInfo);
	};

	return (
		<CustomKeyAvoidingView>
			<View style={styles.innerContainer}>
				<WelcomeHeader />
				<View style={styles.formContainer}>
					<FormInput
						placeholder="Email"
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={handleChange('email')}
					/>
					<FormInput
						placeholder="password"
						secureTextEntry
						value={password}
						onChangeText={handleChange('password')}
					/>
					<AppButton title="Sign In" onPress={handleSubmit} />
					<FormDivider />
					<FormNavigator
						leftTitle={'Forget Password'}
						rightTitle={'Sign Up'}
						onLeftPress={() => navigate('ForgetPassword')}
						onRightPress={() => navigate('SignUp')}
					/>
				</View>
			</View>
		</CustomKeyAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		padding: 15,
	},
	formContainer: {
		marginTop: 15,
	},
});

export default SignIn;
