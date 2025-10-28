import ArchiveWhite from "../assets/icons/archive_white.svg";
import LogoHeader from "../components/LogoHeader"
import LogoFooter from "../components/LogoFooter"
import categoriesList from "../data/categories.json"
import { getPopular } from "../helpers/nyt-api.js"
import Details from "../components/Details.jsx"
import { useEffect, useState } from "react"

function Popular() {
	const [articles, setArticles] = useState([])
	const [render, setRender] = useState(true)

	useEffect(() => {

		if (!render) {
			return
		}

		setRender(false)
		getPopular()
			.then(data => {
				setArticles(data.results)
			})
	}, [render])

	function printArticles(type) {
		return articles.map((currentArticle) => {
			if (!`${currentArticle.section}${currentArticle.subsection}`.toLowerCase().includes(type.toLowerCase())) { return <></> }

			return <article className="main-content__article" key={currentArticle.title}>
				<figure className="main-content__article-holder">
					<img className="main-content__article-image" src={currentArticle.media?.[0]?.["media-metadata"][0].url || "./logo.svg"} alt="logo"></img>

					<figcaption className="main-content__article-content">
						<h2 className="main-content__article-title">
							{currentArticle.title}
						</h2>

						<p className="main-content__article-description">
							{currentArticle.abstract}
						</p>
					</figcaption>

					<button className="main-content__article-archive">
						<img src={ArchiveWhite} alt="archive icon"></img>
					</button>
				</figure>
			</article>
		})
	}

	return (
		<>
			<LogoHeader containsSearchBar />

			<main className="main-content-articles">

				{categoriesList.map((currentDetails) => {
					return <Details title={currentDetails} key={currentDetails + "section"}>
						{printArticles(currentDetails)}
					</Details>
				})}
			</main>
			<LogoFooter />
		</>
	)
}

export default Popular
