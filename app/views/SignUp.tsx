import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppButton from '@ui/AppButton';
import CustomKeyAvoidingView from '@ui/CustomKeyAvoidingView';
import FormDivider from '@ui/FormDivider';
import FormInput from '@ui/FormInput';
import FormNavigator from '@ui/FormNavigator';
import { newUserSchema, yupValidate } from '@utils/validator';
import { AuthStackParamList } from 'app/navigator/AuthNavigator';
import axios from 'axios';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as yup from 'yup';
import WelcomeHeader from '../ui/WelcomeHeader';

interface Props {}

const SignUp: FC<Props> = (props) => {
	const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

	const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
	const { name, email, password } = userInfo;

	const handleChange = (name: string) => (value: string) => {
		setUserInfo({ ...userInfo, [name]: value });
	};

	const handleSubmit = async () => {
		try {
			const { values, error } = await yupValidate(newUserSchema, userInfo);

			if (error) console.log(error);

			if (values) {
				const { data } = await axios.post('http://localhost:8000/auth/sign-up', values);
			}
		} catch (error) {
			if (error instanceof axios.AxiosError) {
				const response = error.response;
				if (response) {
					console.log('API Error : ', response.data.message);
				}
			}
			console.log('normalError :', (error as any).message);
		}
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
					<AppButton title="Sign Up" onPress={handleSubmit} />
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
