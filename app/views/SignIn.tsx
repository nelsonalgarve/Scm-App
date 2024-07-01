import AppButton from '@ui/AppButton';
import FormDivider from '@ui/FormDivider';
import FormInput from '@ui/FormInput';
import FormNavigator from '@ui/FormNavigator';
import { FC } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import WelcomeHeader from '../ui/WelcomeHeader';

interface Props {}

const SignIn: FC<Props> = (props) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
			<ScrollView>
				<View style={styles.innerContainer}>
					<WelcomeHeader />
					<View style={styles.formContainer}>
						<FormInput placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
						<FormInput placeholder="password" secureTextEntry />
						<AppButton title="Sign In" />
						<FormDivider />
						<FormNavigator
							leftTitle={'Forget Password'}
							rightTitle={'Sign Up'}
							onLeftPress={function (): void {
								throw new Error('Function not implemented.');
							}}
							onRightPress={function (): void {
								throw new Error('Function not implemented.');
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
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
