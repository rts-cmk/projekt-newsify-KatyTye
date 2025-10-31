import ArchiveLogo from "../assets/icons/archive.svg?react"
import PopularLogo from "../assets/icons/popular.svg?react"
import SettingsLogo from "../assets/icons/settings.svg?react"
import HomeLogo from "../assets/icons/home.svg?react"
import { NavLink } from "react-router"
import "../styles/_footer.sass"

function LogoFooter() {

	return (
		<footer className="bottom-content">
			<nav className="bottom-content__navigation">
				<NavLink className={"bottom-content__button"} to={"/"} tabIndex={101}>
					<HomeLogo className={"bottom-content__button-image"} />
					<span className="bottom-content__button-text">Home</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/archive"} tabIndex={102}>
					<ArchiveLogo className={"bottom-content__button-image"} />
					<span className="bottom-content__button-text">Archive</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/popular"} tabIndex={103}>
					<PopularLogo className={"bottom-content__button-image"} />
					<span className="bottom-content__button-text">Popular</span>
				</NavLink>

				<NavLink className={"bottom-content__button"} to={"/settings"} tabIndex={104}>
					<SettingsLogo className={"bottom-content__button-image"} />
					<span className="bottom-content__button-text">Settings</span>
				</NavLink>
			</nav>
		</footer>
	)
}

export default LogoFooter
