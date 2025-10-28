const API_KEY = import.meta.env.VITE_NYT_API_KEY
const NYT_URL = "https://api.nytimes.com/svc/mostpopular/v2/"

async function fetchData(base, endpoint) {
	const url = new URL(endpoint, base)

	url.searchParams.set("api-key", API_KEY)

	const response = await fetch(url)
	const data = await response.json()

	return data
}

async function getPopular(days = 1) {
	return fetchData(NYT_URL, `viewed/${days}.json`)
}

export {
	getPopular,
}