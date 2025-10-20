export function CheckBoarding() {
	const isOnboarded = localStorage.getItem("isOnboarded") || null
	console.log("Onboarding status:", isOnboarded)

	if (isOnboarded != "true") {
		console.log("User not onboarded, redirecting to /boarding")
		return "/boarding"
	} else {
		console.log("User is onboarded, staying on current page")
		return ""
	}
}