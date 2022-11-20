import React, { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { StatusListContext } from "../contexts/statusContext";

function CheckBox({ status, index }) {
	const [statusList, handleChangeStatusList] = useContext(StatusListContext);
	const { statusName, statusValue } = status;

	return (
		<Label htmlFor={statusName}>
			<Input
				id={statusName}
				type="checkbox"
				name={statusName}
				checked={statusValue}
				onChange={(e) => {
					handleChangeStatusList(e, index);
				}}
				value={statusName}
			/>
			<Indicator />
			{statusName}
		</Label>
	);
}

export default CheckBox;

const Label = styled.label`
	position: relative;
	display: inline-block;
	margin: 0.6em 1em;
	cursor: pointer;

	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	/* identical to box height, or 125% */

	letter-spacing: -0.25px;
`;

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
	width: 1em;
	height: 1em;
	background: #dfe3fa;
	position: absolute;
	top: 0em;
	left: -13px;
	border-radius: 2px;
	border: 1px solid transparent;

	${Label}:hover & {
		border: 1px solid #7c5dfa;
	}

	&::after {
		content: "";
		position: absolute;
		display: none;
	}

	${Input}:checked + & {
		background-color: #7c5dfa;
	}

	${Input}:checked + &::after {
		display: block;
		top: 0px;
		left: 3px;
		width: 3px;
		height: 6px;
		border: solid white;
		border-width: 0 0.2em 0.2em 0;
		animation-name: ${rotate};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}
`;
