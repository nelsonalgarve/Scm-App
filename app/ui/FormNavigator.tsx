import colors from '@utils/colors';
import React, { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FormNavigatorItem from './FormNavigatorItem';

interface Props {
	leftTitle: string;
	rightTitle: string;
	onLeftPress(): void;
	onRightPress(): void;
}

const FormNavigator: FC<Props> = ({ leftTitle, rightTitle, onLeftPress, onRightPress }) => {
	return (
		<View style={styles.container}>
			<FormNavigatorItem title={leftTitle} onPress={onLeftPress} />
			<FormNavigatorItem title={rightTitle} onPress={onRightPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default FormNavigator;
