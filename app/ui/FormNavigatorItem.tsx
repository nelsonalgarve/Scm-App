import colors from '@utils/colors';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
	title: string;
	onPress(): void;
}

const FormNavigatorItem: FC<Props> = ({ title, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	title: {
		color: colors.primary,
	},
});

export default FormNavigatorItem;
