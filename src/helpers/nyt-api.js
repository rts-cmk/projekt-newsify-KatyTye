const API_KEY = import.meta.env.VITE_NYT_API_KEY
const NYT_URL = "https://api.nytimes.com/svc/mostpopular/v2/"

async function fetchData(base, endpoint, hidden) {
	const url = new URL(endpoint, base)

	if (!hidden) { url.searchParams.set("api-key", API_KEY) }

	const response = await fetch(url)
	const data = await response.json()

	return data
}

async function getPopular(days = 1, newURL = NYT_URL) {
	return fetchData(newURL, `viewed/${days}.json`)
}

export {
	getPopular,
	fetchData
}