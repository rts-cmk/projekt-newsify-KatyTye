import LogoHeader from "../components/LogoHeader"
import LogoFooter from "../components/LogoFooter"
import "../styles/main.sass"

function Popular() {
	const NAVIGATE = useNavigate()

	return (
		<>
			<LogoHeader containsSearchBar />
			<LogoFooter />
		</>
	)
}

export default Popular
