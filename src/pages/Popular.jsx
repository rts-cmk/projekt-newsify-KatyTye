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

	function openArticle(to) {
		open(to, "_blank")
	}

	function retriveTarget(target) {
		if (target.nodeName == "svg") {
			return target.parentElement
		} else if (target.nodeName == "path") {
			return target.parentElement.parentElement
		}
		return target
	}

	function articleWatchList(target, id) {
		let newTarget = retriveTarget(target)

		newTarget.classList.toggle("active")

		if (localStorage.getItem("list") == null) {
			localStorage.setItem("list", `${id},`)
		} else if (localStorage.getItem("list").includes(id)) {
			const newList = localStorage.getItem("list").replaceAll(`${id},`, "")
			localStorage.setItem("list", newList)
		} else {
			localStorage.setItem("list", `${localStorage.getItem("list")}${`${id},`}`)
		}
	}

	function checkWatchList(target, id) {
		let newTarget = retriveTarget(target)

		if (localStorage.getItem("list").includes(id)) {
			newTarget.classList.add("active")
		}
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
					return <article className="main-content__article" key={currentArticle.id}>
						<figure className="main-content__article-holder">
							<img className="main-content__article-image" src={currentArticle.media?.[0]?.["media-metadata"][0].url || logo} alt="logo"></img>

							<figcaption className="main-content__article-content" onClick={() => { openArticle(currentArticle.url) }} key={currentArticle.title}>
								<h2 className="main-content__article-title">
									{currentArticle.title}
								</h2>

								<p className="main-content__article-description">
									{currentArticle.abstract}
								</p>
							</figcaption>

							<button className="main-content__article-archive" onLoad={(target) => checkWatchList(target, currentArticle.id)} onClick={(event) => articleWatchList(event.target, currentArticle.id)}>
								<ArchiveLogo />
							</button>
						</figure>
					</article>
				}
			})
		}
	}

	function categorieCheck(name) {
		const dataSettings = localStorage.getItem("settings") || ""

		if (dataSettings.includes(name)) {
			return false
		}

		return true
	}

	return (
		<main className="main-content-articles">

			{categoriesList.map((currentDetails, idx) => {
				if (categorieCheck(currentDetails.toLowerCase())) {
					return <Details title={currentDetails} key={currentDetails + "-section-" + idx}>
						{printArticles(currentDetails)}
					</Details>
				}
			})}
		</main>
	)
}

export default Popular
