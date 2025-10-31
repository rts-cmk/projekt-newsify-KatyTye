import DeleteLogo from "../assets/icons/delete.svg?react"
import categoriesList from "../data/categories.json"
import Details from "../components/Details.jsx"
import logo from "../assets/icons/logo.svg"
import { useEffect, useState } from "react"

function Archive() {
	const [articles, setArticles] = useState([])

	useEffect(() => {
		const currentData = localStorage.getItem("list") || null
		const currentArticles = []

		if (currentData != "" && currentData != null) {
			currentData.split("---").forEach((loopedData) => {
				if (loopedData != "") {
					const jsonData = loopedData.split("=")

					currentArticles.push({
						"id": jsonData[0],
						"section": jsonData[1],
						"subsection": "",
						"url": jsonData[2],
						"image": jsonData[3],
						"title": jsonData[4],
						"abstract": jsonData[5]
					})
				}
			})
		}

		setArticles(currentArticles)
	}, [])

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

	function articleDelete(target, id) {
		const listData = localStorage.getItem("list") || null
		let newTarget = retriveTarget(target)
		const parentElm = newTarget.parentElement
		const sectionElement = parentElm.parentElement.parentElement
		let saveData = ""

		saveData += `${id}=`
		saveData += `${parentElm.parentElement.attributes.data.value}=`
		saveData += `${parentElm.attributes.data.value}=`
		saveData += `${parentElm.childNodes[0].src}=`
		saveData += `${parentElm.childNodes[1].childNodes[0].textContent}=`
		saveData += `${parentElm.childNodes[1].childNodes[1].textContent}---`

		const newList = listData.replaceAll(saveData, "")
		localStorage.setItem("list", newList)
		parentElm.parentElement.remove()
		sectionElement.removeAttribute("open")
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
							<img className="main-content__article-image" src={currentArticle.image || logo} alt="logo"></img>

							<figcaption className="main-content__article-content" onClick={() => { openArticle(currentArticle.url) }} key={currentArticle.title}>
								<h2 className="main-content__article-title">
									{currentArticle.title}
								</h2>

								<p className="main-content__article-description">
									{currentArticle.abstract}
								</p>
							</figcaption>

							<button className="main-content__article-archive-delete" onClick={(event) => articleDelete(event.target, currentArticle.id)}>
								<DeleteLogo />
							</button>
						</figure>
					</article>
				}
			})
		}
	}

	function categoryCheck(name) {
		const dataSettings = localStorage.getItem("settings") || ""
		if (dataSettings.includes(name)) {
			return false
		}
		return true
	}

	return (
		<main className="main-content-archive">
			{categoriesList.map((currentDetails, idx) => {
				if (categoryCheck(currentDetails.toLowerCase())) {
					return <Details title={currentDetails} key={currentDetails + "-archive-" + idx}>
						{printArticles(currentDetails)}
					</Details>
				}
			})}
		</main>
	)
}

export default Archive
