import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import colors from '@utils/colors';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import AuthNavigator from './AuthNavigator';

const myTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.white,
	},
};

interface Props {}

const Navigator: FC<Props> = () => {
	return (
		<NavigationContainer theme={myTheme}>
			<AuthNavigator />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Navigator;
