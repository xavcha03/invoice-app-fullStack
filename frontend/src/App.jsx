import { useState } from "react";
import Navigation from "./components/Navigation";
import styled, { createGlobalStyle } from "styled-components";
import { StatusListContext } from "./contexts/statusContext";
import InvoiceList from "./components/InvoiceList";
import AsideBar from "./components/AsideBar";

function App() {
	const [statusList, setStatusList] = useState([
		{ statusName: "paid", statusValue: false },
		{ statusName: "pending", statusValue: false },
		{ statusName: "draft", statusValue: false },
	]);

	const handleChangeStatusList = (e, index) => {
		//e.preventDefault();
		let list = [...statusList];
		list[index].statusValue = !list[index].statusValue;
		setStatusList(list);
		console.log(statusList);
	};

	return (
		<>
			<GlobalStyle />
			
			<StatusListContext.Provider
				value={[statusList, handleChangeStatusList.bind(this)]}
			>
				<AsideBar />
				<Container>
					<Navigation />
					<InvoiceList />
				</Container>
			</StatusListContext.Provider>
		</>
	);
}

export default App;

const Container = styled.section`
	margin: 32px 24px;
`;

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    font-family: "League Spartan", sans-serif;
    background-color:#F8F8FB;

  }
`;
