import React from "react";
import { hot } from "react-hot-loader";
import ReactLogo from './react-logo.svg';

const App = () => (
	<div>
		<img className="logo" src={ReactLogo} alt="React" />
		<h1 className="title title--react">React</h1>
	</div>
);

export default hot(module)(App);
