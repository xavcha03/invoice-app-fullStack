import React from "react";
import styled from "styled-components";
import darklogo from "../assets/darkmodeLogo.svg";

function DarkMode() {
	const handleDarkmodeSwitch = (e) => {
		console.log("switch dark/light mode");
	};
	return (
		<Label>
			<Input
				id="darkModeSwitch"
				name="darkModeSwitch"
				type="checkbox"
				onChange={handleDarkmodeSwitch}
			/>
			<Indicator />
		</Label>
	);
}

export default DarkMode;

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`;

const Label = styled.label`
	position: relative;
`;

const Indicator = styled.div`
	width: 20px;
	height: 20px;
	position: absolute;
	top: 0;

	&::after {
		content: "";
		display: inline-block;
		background-image: url(${darklogo});
		width: 20px;
		height: 20px;
		left: 0;
		top: 0;
	}
`;
