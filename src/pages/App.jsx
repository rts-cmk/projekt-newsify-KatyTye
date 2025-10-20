import LogoFooter from "../components/LogoFooter"
import LogoHeader from "../components/LogoHeader"
import { CheckBoarding } from "../components/CheckBoarding.jsx"
import "../styles/home.sass"

function App() {

	return (
		<>
			<LogoHeader containsSearchBar />

			<LogoFooter />

			{CheckBoarding === "/boarding" ? changePage("/boarding") : console.log("LOADED PAGE")}
		</>
	)
}

export default App
