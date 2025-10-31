const API_KEY = import.meta.env.VITE_NYT_API_KEY
const NYT_POPULAR_URL = "https://api.nytimes.com/svc/mostpopular/v2/"
const NYT_HOME_URL = "https://api.nytimes.com/svc/topstories/v2/"

async function fetchData(base, endpoint, hidden) {
	const url = new URL(endpoint, base)

	if (!hidden) { url.searchParams.set("api-key", API_KEY) }

	try {
		const response = await fetch(url)
		const text = await response.text()

		if (!response.ok) {
			return { results: [] }
		}

		try {
			const data = JSON.parse(text)
			return data
		} catch (jsonError) {
			return { results: [] }
		}
	} catch (error) {
		return { results: [] }
	}
}

async function getPopular(days = 1, newURL = NYT_POPULAR_URL) {
	return fetchData(newURL, `viewed/${days}.json`)
}

async function getSection(name) {
	return fetchData(NYT_HOME_URL, `${name}.json`)
}

export {
	getPopular,
	getSection,
	fetchData
}