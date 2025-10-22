import LogoHeader from "../components/LogoHeader"
import LogoFooter from "../components/LogoFooter"
import Categories from "../components/Categories"

function Home() {

	return (
		<>
			<LogoHeader containsSearchBar />
			<Categories />
			<LogoFooter />
		</>
	)
}

export default Home
