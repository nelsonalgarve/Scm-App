import colors from '@utils/colors';
import { FC } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {}

const heading = 'Online MarketPlace for Used Goods';
const subHeading = 'Buy or Sell Used Goods With Trust. Chat directly with Sellers and Buyers, ensuring a seamless, authentic experience. ';

const WelcomeHeader: FC<Props> = (props) => {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/hero.png')} style={styles.image} resizeMode="contain" resizeMethod="resize" />
			<Text style={styles.heading}>{heading}</Text>
			<Text style={styles.subHeading}>{subHeading}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	image: {
		width: 250,
		height: 250,
	},
	heading: {
		fontSize: 20,
		fontWeight: '600',
		textAlign: 'center',
		color: colors.primary,
		letterSpacing: 1,
		marginBottom: 5,
	},
	subHeading: {
		fontSize: 12,
		textAlign: 'center',
		lineHeight: 14,
		color: colors.primary,
	},
});

export default WelcomeHeader;
