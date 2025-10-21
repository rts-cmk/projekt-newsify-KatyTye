import Onboarding from '../pages/Onboarding.jsx'
import Login from '../pages/Login.jsx'

export function CheckBoarding(element) {
	const isOnboarded = localStorage.getItem("isOnboarded") || null
	const isLogin = localStorage.getItem("isLogin") || null

	if (isOnboarded != "true") {
		return <Onboarding />
	} else if (isLogin == "" || isLogin == null) {
		return <Login />
	} else {
		return element
	}
}