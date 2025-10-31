export function checkWatchList(target, id) {
	let newTarget = retriveTarget(target)

	if (localStorage.getItem("list").includes(id)) {
		newTarget.classList.add("active")
	}
}

export function openArticle(to) {
	open(to, "_blank")
}

export function retriveTarget(target) {
	if (target.nodeName == "svg") {
		return target.parentElement
	} else if (target.nodeName == "path") {
		return target.parentElement.parentElement
	}
	return target
}

export function categoryCheck(name) {
	const dataSettings = localStorage.getItem("settings") || ""

	if (dataSettings.includes(name)) {
		return false
	}

	return true
}