import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

function AsideBar() {
	return (
		<>
			<Wrapper>
				<Logo src={logo} alt="Logo" />
			</Wrapper>
		</>
	);
}

export default AsideBar;

const Logo = styled.img`
	height: 72px;
`;

const Wrapper = styled.aside`
	background-color: #373b53;
	height: 72px;
`;
