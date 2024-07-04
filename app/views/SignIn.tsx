import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import CustomKeyAvoidingView from '@ui/CustomKeyAvoidingView';
import FormDivider from '@ui/FormDivider';
import FormInput from '@ui/FormInput';
import FormNavigator from '@ui/FormNavigator';
import { signInSchema, yupValidate } from '@utils/validator';
import client from 'app/api/client';
import { runAxiosAsync } from 'app/api/runAxiosAsync';
import { AuthStackParamList } from 'app/navigator/AuthNavigator';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import WelcomeHeader from '../ui/WelcomeHeader';

interface Props {}

export interface SignInRes {
	profile: {
		id: string;
		email: string;
		name: string;
		verified: boolean;
		avatar?: string;
	};
	tokens: {
		refresh: string;
		access: string;
	};
}

const SignIn: FC<Props> = (props) => {
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const [userInfo, setUserInfo] = useState({ email: '', password: '' });
	const [busy, setBusy] = useState(false);
	const { email, password } = userInfo;

	const handleChange = (name: string) => (value: string) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleSubmit = async () => {
		const { values, error } = await yupValidate(signInSchema, userInfo);
		if (error) showMessage({ message: error, type: 'danger' });
		setBusy(true);
		const res = await runAxiosAsync<SignInRes>(client.post('/auth/sign-in', values));

		if (res) {
			// store tokens
			console.log(res);
		}

		setBusy(false);
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
					<AppButton active={!busy} title="Sign In" onPress={handleSubmit} />
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
