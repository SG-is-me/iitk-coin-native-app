import React from "react";
import LoginForm from "./Login";
import SignUpForm from "./SignUp";
import OtpForm from "./Otp";
import TransferCoinForm from "./TransferCoin";
import { View } from "react-native";

interface Props {
    form: "Login" | "SignUp" | "OTP" | "TransferCoin"
}

const Forms: React.FC<Props> = ({ form }) => {
	
	if (form == "Login") {
		return <LoginForm />;
	}

	if (form == "SignUp") {
		return <SignUpForm />;
	}

	if (form == "OTP") {
		return <OtpForm />;
	}

	if (form == "TransferCoin") {
		return <TransferCoinForm />;
	}

	return <View />;
	
};

export default Forms;
