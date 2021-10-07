import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, NumericInput, Button } from "components";
import { LABELS, LENGTH } from "constant";
import Image from "components/SVGImage";
import { StyleSheet } from "react-native";

const TransferCoinForm: () => JSX.Element = () => {

	const [rollNo, setRollNo] = useState<string>("");
	const [amount, setAmount] = useState<string>("");
	const [remark, setRemark] = useState<string>("");

	const onChangeRollNo = (rollNo: string) => {
		if (rollNo.length < LENGTH.ROLL_NO) {
			setRollNo(rollNo);
		}
	};

	const onChangeAmount = (amount: string) => {
		setAmount(amount);
	};

	const onChangeRemark = (remark: string) => {
		if (remark.length < LENGTH.REMARKS) {
			setRemark(remark);
		}
	};
	
	// Transfer Coin form
	const transferCoinForm = (

		<View>
			
			<TextInput
				placeholder={LABELS.ROLL_NO_PLACEHOLDER}
				title={LABELS.ROLL_NO_INPUT_FIELD_TITLE}
				onChangeText={onChangeRollNo}
				value={rollNo}
			/>

			<View style={styles.amountContainer}>	 
				<NumericInput
					placeholder={LABELS.COINS_PLACEHOLDER}
					title={LABELS.COINS_INPUT_FIELD_TITLE}
					onChangeText={onChangeAmount}
					value={amount}/>      
				<Image name = "CoinLogo" style={styles.imageStyle} />
			</View>

			<TextInput 
				placeholder={LABELS.REMARK_PLACEHOLDER}
				title={LABELS.REMARKS_INPUT_FIELD_TITLE}
				onChangeText={onChangeRemark}
				value={remark}
			/>

			<Button title= {LABELS.TRANSFER_COIN_BUTTON_TEXT} onPress={() => {console.log(amount);}}/>

		</View>
	);

	// render
	return (
		transferCoinForm 
	);

};

const styles =StyleSheet.create({
	amountContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	imageStyle: {
		height: "40%",
		width: "40%",
		marginLeft: "-28%",
		marginTop: "6%",
	},
});

export default TransferCoinForm;
