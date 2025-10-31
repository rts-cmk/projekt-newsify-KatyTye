import { checkWatchList, openArticle, retriveTarget, categoryCheck } from "../components/Article.jsx"
import ArchiveLogo from "../assets/icons/archive.svg?react"
import categoriesList from "../data/categories.json"
import { getPopular } from "../helpers/nyt-api.js"
import Details from "../components/Details.jsx"
import logo from "../assets/icons/logo.svg"
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

	function articleWatchList(target, id) {
		const listData = localStorage.getItem("list") || null
		let newTarget = retriveTarget(target)

		const parentElm = newTarget.parentElement
		let saveData = ""

		saveData += `${id}=`
		saveData += `${parentElm.parentElement.attributes.data.value}=`
		saveData += `${parentElm.attributes.data.value}=`
		saveData += `${parentElm.childNodes[0].src}=`
		saveData += `${parentElm.childNodes[1].childNodes[0].textContent}=`
		saveData += `${parentElm.childNodes[1].childNodes[1].textContent}---`

		if (listData == null) {
			localStorage.setItem("list", saveData)
		} else if (listData.includes(id)) {
			const newList = listData.replaceAll(saveData, "")
			localStorage.setItem("list", newList)
		} else {
			localStorage.setItem("list", `${listData}${saveData}`)
		}

		newTarget.classList.toggle("active")
	}

	function printArticles(type) {
		let elmArticles = false

		articles.map((currentArticle) => {
			if (`${currentArticle.section}${currentArticle.subsection}`.toLowerCase().includes(type.toLowerCase())) {
				elmArticles = true
			}
		})

		if (!elmArticles) {
			return <p className="animated-details__nothing">No articles found in this section</p>
		} else {
			return articles.map((currentArticle) => {
				if (`${currentArticle.section}${currentArticle.subsection}`.toLowerCase().includes(type.toLowerCase())) {
					return <article className="main-content__article" key={currentArticle.id} data={type}>
						<figure className="main-content__article-holder" data={currentArticle.url}>
							<img className="main-content__article-image" src={currentArticle.media?.[0]?.["media-metadata"][0].url || logo} alt="logo"></img>

							<figcaption className="main-content__article-content" onClick={() => { openArticle(currentArticle.url) }} key={currentArticle.title}>
								<h2 className="main-content__article-title">
									{currentArticle.title}
								</h2>

								<p className="main-content__article-description">
									{currentArticle.abstract}
								</p>
							</figcaption>

							<button className="main-content__article-archive" onClick={(event) => articleWatchList(event.target, currentArticle.id)}>
								<ArchiveLogo onLoad={(event) => checkWatchList(event.target, currentArticle.id)} />
								{/* THE ELEMENT ABOVE DOES NOT LOAD THE ICON IF ITS ALREADY IN WATCH LIST (on page reload) */}
							</button>
						</figure>
					</article>
				}
			})
		}
	}

	return (
		<main className="main-content-popular">
			{categoriesList.map((currentDetails, idx) => {
				if (categoryCheck(currentDetails.toLowerCase())) {
					return <Details title={currentDetails} key={currentDetails + "-popular-" + idx}>
						{printArticles(currentDetails)}
					</Details>
				}
			})}
		</main>
	)
}

export default Popular
