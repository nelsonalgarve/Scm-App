import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import CustomKeyAvoidingView from '@ui/CustomKeyAvoidingView';
import FormDivider from '@ui/FormDivider';
import FormInput from '@ui/FormInput';
import FormNavigator from '@ui/FormNavigator';
import { newUserSchema, yupValidate } from '@utils/validator';
import client from 'app/api/client';
import { runAxiosAsync } from 'app/api/runAxiosAsync';
import { AuthStackParamList } from 'app/navigator/AuthNavigator';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import WelcomeHeader from '../ui/WelcomeHeader';
import { SignInRes } from './SignIn';

interface Props {}

const SignUp: FC<Props> = (props) => {
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
	const [busy, setBusy] = useState(false);
	const { name, email, password } = userInfo;

	const handleChange = (name: string) => (value: string) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleSubmit = async () => {
		const { values, error } = await yupValidate(newUserSchema, userInfo);
		if (error) showMessage({ message: error, type: 'danger' });
		setBusy(true);
		const res = await runAxiosAsync<{ message: string }>(client.post('/auth/sign-up', values));

		if (res?.message) {
			showMessage({ message: res.message, type: 'success' });
			const loginRes = await runAxiosAsync<SignInRes>(client.post('/auth/sign-in', values));

			if (res) {
				// store tokens
				console.log(loginRes);
			}
		}
		setBusy(false);
	};

	return (
		<CustomKeyAvoidingView>
			<View style={styles.innerContainer}>
				<WelcomeHeader />
				<View style={styles.formContainer}>
					<FormInput placeholder="Name" value={name} onChangeText={handleChange('name')} />
					<FormInput
						placeholder="Email"
						value={email}
						keyboardType="email-address"
						autoCapitalize="none"
						onChangeText={handleChange('email')}
					/>
					<FormInput
						placeholder="password"
						value={password}
						secureTextEntry
						onChangeText={handleChange('password')}
					/>
					<AppButton active={!busy} title="Sign Up" onPress={handleSubmit} />
					<FormDivider />
					<FormNavigator
						leftTitle={'Forget Password'}
						rightTitle={'Sign In'}
						onLeftPress={() => navigate('ForgetPassword')}
						onRightPress={() => navigate('SignIn')}
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

export default SignUp;
