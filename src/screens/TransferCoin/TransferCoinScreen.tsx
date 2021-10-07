import React from "react";
import { View } from "react-native";
import { Text } from "components";
import styles from "../screen.styles";
import { LABELS } from "constant";
import TransferCoinForm from "components/Forms/TransferCoin";

const TransferCoinPage: () => JSX.Element = () => {

	// Transfer Coin form
	const transferCoinPage = (

		<View style={styles.contentContainer}>
            
			<Text.Heading title={LABELS.TRANSFER_COINS_FORM_TITLE} />

			<View style={styles.formContainer}>
				<TransferCoinForm />
			</View>
			
		</View>
	);

	// render
	return (
		transferCoinPage
	);

};

export default TransferCoinPage;
