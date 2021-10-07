import { BottomSheet, Header } from "components";
import React from "react";
import LoginPage from "./Login/LoginScreen";
import SignUpPage from "./SignUp/SignUpScreen";
import OtpPage from "./Otp/OtpScreen";
import TransferCoinPage from "./TransferCoin/TransferCoinScreen";

const shrinkedHeader = <Header.Shrinked />;
const expandedHeader = <Header.Expanded />;

const Login: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<LoginPage/>
		</BottomSheet>
	);
};

const SignUp: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<SignUpPage/>
		</BottomSheet>
	);
};

const OTP: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<OtpPage/>
		</BottomSheet>
	);
};

const TransferCoin: () => JSX.Element = () => {

	return (
		<BottomSheet expandedHeader={expandedHeader} shrinkedHeader={shrinkedHeader}>
			<TransferCoinPage/>
		</BottomSheet>
	);
};

export default { Login, SignUp, OTP, TransferCoin };
