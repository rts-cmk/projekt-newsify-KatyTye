import { BrowserRouter, Route, Routes } from 'react-router'
import Onboarding from './pages/Onboarding.jsx'
import { createRoot } from 'react-dom/client'
import Archive from './pages/Archive.jsx'
import Popular from './pages/Popular.jsx'
import Settings from './pages/Settings.jsx'
import App from './pages/App.jsx'

function checkOnboarding(element) {
	const isOnboarded = localStorage.getItem("isOnboarded")

	if (isOnboarded != "true") {
		return <Onboarding />
	} else if (element == <Onboarding /> && isOnboarded == "true") {
		return <App />
	} else {
		return element
	}
}

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route index path="*" element={checkOnboarding(<App />)} />
			<Route index path="/" element={checkOnboarding(<App />)} />
			<Route index path="/archive" element={checkOnboarding(<Archive />)} />
			<Route index path="/popular" element={checkOnboarding(<Popular />)} />
			<Route index path="/settings" element={checkOnboarding(<Settings />)} />
			<Route index path="/boarding" element={checkOnboarding(<Onboarding />)} />
		</Routes>
	</BrowserRouter>
)
