import styled from "styled-components";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import { useContext, useEffect, useState } from "react";
import { StatusListContext } from "../contexts/statusContext";
import CheckBox from "./CheckBox";

function Navigation() {
	const [statusBtnOpen, setStatusBtnOpen] = useState(true);

	const handleStatusOpenClick = (e) => {
		e.preventDefault();
		setStatusBtnOpen(!statusBtnOpen);
	};
	const handleStatusOpenQuit = (e) => {
		e.preventDefault();
		setStatusBtnOpen(false);
	};

	return (
		<Nav>
			<Wrapper column>
				<Title>Invoices</Title>
				<Description>There are 7 total invoices</Description>
			</Wrapper>
			<Wrapper>
				<StatusBtn onMouseLeave={handleStatusOpenQuit}>
					<FilterBtn onClick={handleStatusOpenClick}>
						Filter <ColoredArrow size="1rem" />
					</FilterBtn>

					{statusBtnOpen ? <ListStatus /> : <></>}
				</StatusBtn>
				<button>New invoice</button>
			</Wrapper>
		</Nav>
	);
}

export default Navigation;

const ListStatusComponent = ({ className }) => {
	const [statusList, handleChangeStatusList] = useContext(StatusListContext);

	return (
		<div className={className}>
			{statusList.map((status, index) => {
				return (
					<CheckBox
						index={index}
						key={status.statusName}
						status={status}
					/>
				);
			})}
		</div>
	);
};

const FilterBtn = styled.button`
	display: flex;
`;

const ListStatus = styled(ListStatusComponent)`
	display: flex;
	flex-direction: column;
	gap: 1em;
	align-items: start;
	background-color: white;
	box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
	border-radius: 8px;
	padding: 24px;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 23px;
	transform: translateY(100%);

	label {
		display: flex;
		gap: 13px;
	}
`;

const ColoredArrow = styled(AngleDown)`
	color: #7c5dfa;
	margin: 0 1em;
`;

const StatusBtn = styled.div`
	position: relative;
	padding: 40px;

	button {
		border: none;
		background-color: transparent;
	}
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1440px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
	align-items: center;
`;

const Description = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;

	letter-spacing: -0.25px;

	color: #888eb0;
`;

const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 36px;
	/* identical to box height */

	letter-spacing: -1px;

	color: #0c0e16;
`;
