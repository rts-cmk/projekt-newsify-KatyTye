import ActiveArchiveLogo from "../assets/icons/archive_green.svg"
import ActivePopularLogo from "../assets/icons/popular_green.svg"
import ActiveSettingsLogo from "../assets/icons/settings_green.svg"
import ActiveHomeLogo from "../assets/icons/home_green.svg"
import ArchiveLogo from "../assets/icons/archive.svg"
import PopularLogo from "../assets/icons/popular.svg"
import SettingsLogo from "../assets/icons/settings.svg"
import HomeLogo from "../assets/icons/home.svg"
import { NavLink } from "react-router"
import "../styles/_footer.sass"

function LogoFooter() {
	function findSelected(element, current) {
		if (element.target.parentElement.className.includes("active")) {
			element.target.src = current
		}
	}

	return (
		<footer className="bottom-content">
			<nav className="bottom-content__navigation">
				<NavLink className={"bottom-content__button"} to={"/"} tabIndex={101}>
					<img className="bottom-content__button-image" src={HomeLogo} onLoad={(target) => findSelected(target, ActiveHomeLogo)} alt="frontpage"></img>
					<span className="bottom-content__button-text">Home</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/archive"} tabIndex={102}>
					<img className="bottom-content__button-image" src={ArchiveLogo} onLoad={(target) => findSelected(target, ActiveArchiveLogo)} alt="saved news"></img>
					<span className="bottom-content__button-text">Archive</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/popular"} tabIndex={103}>
					<img className="bottom-content__button-image" src={PopularLogo} onLoad={(target) => findSelected(target, ActivePopularLogo)} alt="popular news"></img>
					<span className="bottom-content__button-text">Popular</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/settings"} tabIndex={104}>
					<img className="bottom-content__button-image" src={SettingsLogo} onLoad={(target) => findSelected(target, ActiveSettingsLogo)} alt="profile settings"></img>
					<span className="bottom-content__button-text">Settings</span>
				</NavLink>
			</nav>
		</footer>
	)
}

export default LogoFooter
