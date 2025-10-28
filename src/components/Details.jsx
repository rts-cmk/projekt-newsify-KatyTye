import { IoChevronForwardOutline } from "react-icons/io5"
import logo from "../assets/icons/logo.svg"
import "../styles/_details.sass"

export default function Details({ title, children, ...props }) {
	let newName = title.toLowerCase()

	const handleToggle = event => {
		const element = event.target
		const openHeight = element.scrollHeight + "px"

		element.style.height = element.open ? openHeight : null
	}

	return (
		<details onToggle={handleToggle} {...props} className={"main-content-article__section animated-details main-content-article__" + newName} key={newName + "-section"}>
			<summary className="animated-details__summary">
				<div>
					<img src={logo} alt="logo"></img>
					<h2>{title}</h2>
				</div>
				<IoChevronForwardOutline className="animated-details__arrow" />
			</summary>
			{children}
		</details>
	)
}