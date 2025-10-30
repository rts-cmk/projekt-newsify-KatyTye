export function CheckDarkMode(element) {
	if (localStorage.getItem("dark") && localStorage.getItem("dark") == "true") {
		element.parentElement.parentElement.parentElement.classList.add("dark")
	}
}