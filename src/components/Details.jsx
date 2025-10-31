import { checkWatchList, openArticle, retriveTarget } from "../components/Article.jsx"
import { IoChevronForwardOutline } from "react-icons/io5"
import ArchiveLogo from "../assets/icons/archive.svg?react"
import { getSection } from "../helpers/nyt-api"
import logo from "../assets/icons/logo.svg"
import { useEffect, useState } from "react"
import "../styles/_details.sass"

export default function Details({ title, children, ...rest }) {
	const [articles, setArticles] = useState([])
	const [render, setRender] = useState(true)
	let newName = title.toLowerCase()

	useEffect(() => {
		if (!render || rest["props"] == undefined) {
			return
		}

		setRender(false)
		getSection(newName)
			.then(data => {
				setArticles(data.results)
			})
	}, [render])

	const handleToggle = event => {
		const element = event.target
		const openHeight = element.scrollHeight + "px"
		element.style.height = element.open ? openHeight : null
	}

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

	function printArticles(type, props) {
		if (props == "fetchClick") {

			const filtered = articles.filter((currentArticle) =>
				(`${currentArticle.section}${currentArticle.subsection}`).toLowerCase().includes(type.toLowerCase())
			)

			if (filtered.length === 0) {
				return <p className="animated-details__nothing">No articles found in this section</p>
			} else {
				return filtered.map((currentArticle, idx) => {
					const key = currentArticle.id || currentArticle.url || `${type}-${idx}`
					return <article className="main-content__article" key={key} data={type}>
						<figure className="main-content__article-holder" data={currentArticle.url}>
							<img className="main-content__article-image" src={currentArticle.multimedia?.[0]?.url || logo} alt="logo"></img>

							<figcaption className="main-content__article-content" onClick={() => { openArticle(currentArticle.url) }}>
								<h2 className="main-content__article-title">
									{currentArticle.title}
								</h2>

								<p className="main-content__article-description">
									{currentArticle.abstract}
								</p>
							</figcaption>

							<button className="main-content__article-archive" onClick={(event) => articleWatchList(event.target, currentArticle.id)}>
								<ArchiveLogo onLoad={(event) => checkWatchList(event.target, currentArticle.id)} />
							</button>
						</figure>
					</article>
				})
			}
		}
	}

	return (
		<details onToggle={handleToggle} {...rest} className={"main-content-article__section animated-details main-content-article__" + newName}>
			<summary className="animated-details__summary" key={newName + "-summary"}>
				<div>
					<img src={logo} alt="logo"></img>
					<h2>{title}</h2>
				</div>
				<IoChevronForwardOutline className="animated-details__arrow" />
			</summary>
			{(children) && children}
			{printArticles(newName, rest["props"])}
		</details>
	)
}