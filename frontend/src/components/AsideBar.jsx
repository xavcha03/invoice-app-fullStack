import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import DarkMode from "./DarkMode";

function AsideBar() {
	return (
		<>
			<Wrapper>
				<Logo src={logo} alt="Logo" />
				<BtnContainer>
					<DarkMode />
					<button>USER</button>
				</BtnContainer>
			</Wrapper>
		</>
	);
}

export default AsideBar;

const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;

	&::before {
		content: "";
		border: 1px solid #494e6e;
		align-self: stretch;
		position: relative;
		left: 60%;
	}
`;

const Logo = styled.img`
	height: 72px;
`;

const Wrapper = styled.aside`
	background-color: #373b53;
	height: 72px;
	display: flex;
	justify-content: space-between;
`;
