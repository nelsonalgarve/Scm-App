import colors from '@utils/colors';
import { FC, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

const FormInput: FC<Props> = (props) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<TextInput
			style={[styles.input, isFocused ? styles.borderActive : styles.borderDeactive]}
			placeholderTextColor={colors.primary}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			{...props}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		width: '100%',
		height: 40,
		// borderColor: 'gray',
		// borderWidth: 1,
		padding: 8,
		marginBottom: 15,
		borderRadius: 5,
		backgroundColor: 'white',
		color: colors.primary,
		textAlign: 'center',
		fontSize: 14,
		letterSpacing: 1,
		fontWeight: '600',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	borderDeactive: {
		borderColor: colors.primary,
		borderWidth: 1,
	},
	borderActive: {
		borderColor: colors.secondary,
		borderWidth: 2,
	},
});

export default FormInput;
