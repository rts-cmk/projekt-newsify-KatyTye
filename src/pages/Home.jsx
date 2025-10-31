import { checkWatchList, openArticle, retriveTarget, categoryCheck } from "../components/Article.jsx"
import ArchiveLogo from "../assets/icons/archive.svg?react"
import categoriesList from "../data/categories.json"
import { getSection } from "../helpers/nyt-api.js"
import Details from "../components/Details.jsx"
import logo from "../assets/icons/logo.svg"

function Home() {
	return (
		<main className="main-content-popular">
			{categoriesList.map((currentDetails, idx) => {
				if (categoryCheck(currentDetails.toLowerCase())) {
					return <Details title={currentDetails} key={currentDetails + "-popular-" + idx} props={"fetchClick"}>
					</Details>
				}
			})}
		</main>
	)
}

export default Home
