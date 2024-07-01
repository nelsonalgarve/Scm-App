import colors from '@utils/colors';
import { FC, useState } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

interface Props extends PressableProps {
	title: string;
	active?: boolean;
	onPress?(): void;
}

const AppButton: FC<Props> = ({ title, active = true, onPress }) => {
	return (
		<Pressable style={[styles.button, active ? styles.btnActive : styles.btnDeActive]} onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},
	btnActive: {
		backgroundColor: colors.primary,
	},
	btnDeActive: {
		backgroundColor: colors.deActive,
	},
	title: {
		color: colors.white,
		fontWeight: '700',
		letterSpacing: 1,
	},
});

export default AppButton;
