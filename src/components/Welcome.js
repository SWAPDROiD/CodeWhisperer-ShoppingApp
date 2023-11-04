import React from "react";
import Login from "./Login";
import Register from "./Register";

const LoginForm = () => {
	return (
		<div id="login"><Login /></div>
	);
};

const RegisterForm = () => {
	return <div id="register"><Register/></div>;
};

const Welcome = () => {
	return (
		<div>
			<LoginForm />
			<RegisterForm />
		</div>
	);
};

export default Welcome;
