//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header class = "header">
		<h1>Off Road memory Game!</h1>
		<h2>Click on any image to earn a point, you stop adding points when select an image more than once. If you click all 12 pics, you win.</h2>
	</header>
);

export default Jumbotron;