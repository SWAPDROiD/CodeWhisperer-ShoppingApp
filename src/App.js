import AnchorLink from "react-anchor-link-smooth-scroll";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1 align="center">Welcome To Shopping App</h1>
			<h2 align="center">
				<AnchorLink href="#login">
					<button>Login</button>-
				</AnchorLink>
				<AnchorLink href="#register">
					<button>Register</button>
				</AnchorLink>
			</h2>
			<Welcome />
		</div>
	);
}

export default App;
