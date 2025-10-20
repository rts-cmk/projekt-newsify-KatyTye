import ArchiveLogo from "../assets/icons/archive.svg"
import PopularLogo from "../assets/icons/popular.svg"
import SettingsLogo from "../assets/icons/settings.svg"
import HomeLogo from "../assets/icons/home.svg"
import { NavLink } from "react-router"
import "../styles/_footer.sass"

function LogoFooter() {
	const PATH = location.pathname

	function findSelected(current) {
		if (PATH.includes(current)) {
			return " bottom-content__button-active"
		} else {
			return ""
		}
	}

	return (
		<footer className="bottom-content">
			<nav className="bottom-content__navigation">
				<NavLink className={"bottom-content__button"} to={"/"} tabIndex={101}>
					<img className="bottom-content__button-image" src={HomeLogo} alt="frontpage"></img>
					<span className="bottom-content__button-text">Home</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/archive"} tabIndex={102}>
					<img className="bottom-content__button-image" src={ArchiveLogo} alt="saved news"></img>
					<span className="bottom-content__button-text">Archive</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/popular"} tabIndex={103}>
					<img className="bottom-content__button-image" src={PopularLogo} alt="popular news"></img>
					<span className="bottom-content__button-text">Popular</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/settings"} tabIndex={104}>
					<img className="bottom-content__button-image" src={SettingsLogo} alt="profile settings"></img>
					<span className="bottom-content__button-text">Settings</span>
				</NavLink>
			</nav>
		</footer>
	)
}

export default LogoFooter
