import React from "react";
import "./App.css";
import Header from "./Header";
import Routes from "./Routes";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Header />
			</header>
			<Routes />
		</div>
	);
}

export default App;
