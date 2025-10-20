import { useNavigate } from "react-router"
import logo from "/public/logo.svg"
import "../styles/_header.sass"

function LogoHeader({ containsSearchBar }) {
	const navigate = useNavigate()

	return (
		<header className="top-content">
			<figure className="top-content__image-container" onClick={navigate("/")}>
				<img src={logo} alt="logo" className="top-content__page-logo"></img>
				<h2 className="top-content__logo-name">
					Newsify
				</h2>
			</figure>

			{containsSearchBar && <form action="#" className="top-content__search-bar">
				<input type="text" name="search" className="top-content__search-content" placeholder="Search news" required></input>
			</form>}
		</header>
	)
}

export default LogoHeader
