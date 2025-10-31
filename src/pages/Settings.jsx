import LogoHeader from "../components/LogoHeader"
import LogoFooter from "../components/LogoFooter"
import categoriesList from "../data/categories.json"
import logo from "../assets/icons/logo.svg"
import Credits from "../components/Credits"

function Settings() {

	function toggleDarkMode(target) {
		const rootElement = target.parentElement.parentElement.parentElement

		if (localStorage.getItem("dark") && localStorage.getItem("dark") == "true") {
			localStorage.setItem("dark", "false")
			rootElement.classList.remove("dark")
		} else {
			localStorage.setItem("dark", "true")
			rootElement.classList.add("dark")
		}
	}

	function toggleActive(target, name) {
		const newTarget = (target.className.includes("white")) ? target.parentElement : target;
		const dataActive = localStorage.getItem("settings") || ""

		if (dataActive.includes(name)) {
			const newSettings = dataActive.replaceAll(`${name},`, "")
			newTarget.classList.add("active")
			localStorage.setItem("settings", newSettings)
		} else {
			newTarget.classList.remove("active")
			localStorage.setItem("settings", `${dataActive}${name},`)
		}
	}

	function findActive(name) {
		if (localStorage.getItem("settings") && localStorage.getItem("settings").includes(name)) {
			return ""
		}

		return "active"
	}

	return (
		<>
			<Credits />
			<LogoHeader />
			<main className="main-content-settings">
				<section className="settings-section">
					<h2 className="settings-section__title">Settings</h2>
					<h3 className="settings-section__subtitle">Categories</h3>
					{categoriesList.map((currentDetails, idx) => {
						const lowerCaseName = currentDetails.toLowerCase()
						return <figure className={`settings-section__setting settings-section__setting-${lowerCaseName}`} key={`${currentDetails}-settings-${idx}`}>
							<img className={`settings-section__setting-image`} src={logo} alt="logo"></img>
							<figcaption className={`settings-section__setting-name`}>
								{currentDetails.toUpperCase()}
							</figcaption>

							<button className={`settings-section__setting-button ` + findActive(lowerCaseName)} onClick={(event) => toggleActive(event.target, lowerCaseName)}>
								<div className={`settings-section__setting-button-white slider`}></div>
							</button>
						</figure>
					})}
					<button className="settings-section__mode-button" onClick={(event) => toggleDarkMode(event.target)}>
						Toggle dark mode
					</button>
					<p className="settings-section__version">Version 4.8.15.16.23.42</p>
				</section>
			</main>
			<LogoFooter />
		</>
	)
}

export default Settings
