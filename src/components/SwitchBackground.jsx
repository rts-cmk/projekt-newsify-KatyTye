import OnboardingImageOneBlack from "../assets/Onboarding_one_black.png"
import OnboardingImageOneWhite from "../assets/Onboarding_one_white.png"
import OnboardingImageTwoBlack from "../assets/Onboarding_two_black.png"
import OnboardingImageTwoWhite from "../assets/Onboarding_two_white.png"
import OnboardingImageThreeBlack from "../assets/Onboarding_three_black.png"
import OnboardingImageThreeWhite from "../assets/Onboarding_three_white.png"
import { useEffect, useState, Fragment } from "react"

function returnImageList(type) {
	const imageList = []

	if (type === "black") {
		imageList.push(OnboardingImageOneBlack)
		imageList.push(OnboardingImageTwoBlack)
		imageList.push(OnboardingImageThreeBlack)
	} else {
		imageList.push(OnboardingImageOneWhite)
		imageList.push(OnboardingImageTwoWhite)
		imageList.push(OnboardingImageThreeWhite)
	}

	return imageList
}

export function SwitchBackgroundElement({ source, extra = false, buttons = true }) {
	const [currentImage, setCurrentImage] = useState([])
	const [current, setCurrent] = useState(0)

	useEffect(() => {
		const darkMode = Boolean(localStorage.getItem("darkMode")) || false
		setCurrentImage(returnImageList(darkMode ? "black" : "white"))
	}, [])

	function returnNavigationButtons() {
		function buttonActive(index) {
			if (index === current) {
				return " main-content-boarding__button-selected"
			} else {
				return ""
			}
		}

		return source.map((_, idx) => {
			return (
				<button className={"main-content-boarding__boarding-small-button" + buttonActive(idx)} key={"button" + idx} onClick={() => setCurrent(idx)}>
				</button>
			)
		})
	}

	function returnContent() {
		return source.map((item, idx) => {
			if (idx === current) {
				return (
					<Fragment key={"fragment" + idx}>
						<h2 className="main-content-boarding__boarding-title" key={"title" + idx}>{item.title}</h2>
						<p className="main-content-boarding__boarding-text" key={"text" + idx}>{item.desc}</p>

						{extra && <nav className="main-content-boarding__boarding-navigation" key={"nav" + idx}>
							{returnNavigationButtons()}
						</nav>}
					</Fragment>
				)
			} else {
				return null
			}
		})
	}

	function handleSkip() {
		localStorage.setItem("isOnboarded", "true")
		location.reload()
	}

	function handleNext() {
		setCurrent(current + 1)

		if (current + 1 >= source.length) {
			localStorage.setItem("isOnboarded", "true")
			location.reload()
		}
	}

	return (
		<>
			<figure className="main-content-boarding__boarding-image-holder">
				<img src={currentImage[current]} alt={"showing image number " + current} className="main-content-boarding__boarding-image" key={"boarding-image" + current}></img>
			</figure>

			{returnContent()}

			{buttons && <nav className="main-content-boarding__boarding-button-holder">
				<button className="main-content-boarding__boarding-button-skip" onClick={handleSkip}>Skip</button>
				<button className="main-content-boarding__boarding-button-next" onClick={handleNext}>Next</button>
			</nav>}
		</>
	)
}

export default SwitchBackgroundElement