import styled from "styled-components";
import { AngleDown } from "@styled-icons/fa-solid/AngleDown";
import { useState } from "react";

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
					<button onClick={handleStatusOpenClick}>
						Filter by status <ColoredArrow size="1rem" />
					</button>

					{statusBtnOpen ? <ListStatus /> : <></>}
				</StatusBtn>
				<button>New invoice</button>
			</Wrapper>
		</Nav>
	);
}

export default Navigation;

const statusList = ["paid", "pending", "draft"];

const ListStatusComponent = ({ className }) => {
	return (
		<div className={className}>
			{statusList.map((status) => {
				return (
					<label>
						<input type="checkbox" /> {status}
					</label>
				);
			})}
		</div>
	);
};

const ListStatus = styled(ListStatusComponent)`
	display: flex;
	flex-direction: column;
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
	max-width: 800px;
	margin: auto;
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
