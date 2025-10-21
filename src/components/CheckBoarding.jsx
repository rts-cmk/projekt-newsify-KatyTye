import Onboarding from '../pages/Onboarding.jsx'

export function CheckBoarding(element) {
	const isOnboarded = localStorage.getItem("isOnboarded") || null

	if (isOnboarded != "true") {
		return <Onboarding />
	} else {
		return element
	}
}