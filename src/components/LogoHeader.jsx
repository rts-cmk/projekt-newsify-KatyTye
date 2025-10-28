import logo from "../assets/icons/logo.svg"
import { Link } from "react-router"
import "../styles/_header.sass"

function LogoHeader({ containsSearchBar }) {
	return (
		<header className="top-content">
			<Link className="top-content__image-container" to={"/"}>
				<img src={logo} alt="logo" className="top-content__page-logo"></img>
				<span className="top-content__logo-name">
					Newsify
				</span>
			</Link>

			{containsSearchBar && <form action="#" className="top-content__search-bar">
				<input type="text" name="search" className="top-content__search-content" placeholder="Search news" required></input>
			</form>}
		</header>
	)
}

export default LogoHeader
