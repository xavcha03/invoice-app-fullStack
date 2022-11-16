import Navigation from "./components/Navigation";
import { createGlobalStyle } from "styled-components";

function App() {
	return (
		<>
			<GlobalStyle />
			<Navigation />
		</>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: "League Spartan", sans-serif;
    background-color:#F8F8FB;

  }
`;
