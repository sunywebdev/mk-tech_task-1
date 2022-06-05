import HomePage from "./HomePage/HomePage";
import Footer from "./Shared/Footer/Footer";
import NavBar from "./Shared/NavBar/NavBar";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;
