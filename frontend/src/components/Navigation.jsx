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
				<StatusBtn /**onMouseLeave={handleStatusOpenQuit}**/>
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

//const statusList = ["Paid", "Pending", "Draft"];
const statusList = [
	{statusName: "paid", statusValue: false},
	{statusName: "pending", statusValue: false},
	{statusName: "draft", statusValue: false},
]

const ListStatusComponent = ({ className }) => {
	return (
		<div className={className}>
			{statusList.map((status) => {
				return (
					<Checkbox value={status.statusValue}>{status.statusName}</Checkbox>
				);
			})}
		</div>
	);
};

const CheckboxComponent = ({className, children}) => {
	return (
			<label className={className}>
				<input type="checkbox" /> {children}
				<span></span>
			</label>
	);
}


const Checkbox = styled(CheckboxComponent)`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 15px;

	input{
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	span{
		position: absolute;
		top: 0;
		left: 0;
		height: 16px;
		width: 16px;
		background-color: #DFE3FA;
		border-radius: 2px;
	}

	&:hover input ~ span{
		border:1px solid #7C5DFA
	}

	input:checked ~ span {
		background-color: #7C5DFA;
	  }

	span:after {
		content: "";
		position: absolute;
		display: none;
	  }

	input:checked ~ span:after {
		display: block;
	  }

	span:after {
		left: 5px;
		top: 0px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
`

const ListStatus = styled(ListStatusComponent)`
	display: flex;
	flex-direction: column;
	gap:1em;
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
	align-items:center;
	margin:0 24px;
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
