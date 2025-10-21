import { CheckBoarding } from './components/CheckBoarding.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Onboarding from './pages/Onboarding.jsx'
import { createRoot } from 'react-dom/client'
import Archive from './pages/Archive.jsx'
import Popular from './pages/Popular.jsx'
import Settings from './pages/Settings.jsx'
import App from './pages/App.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={CheckBoarding(<App />)} />
				<Route path="*" element={CheckBoarding(<App />)} />
				<Route path="/archive" element={CheckBoarding(<Archive />)} />
				<Route path="/popular" element={CheckBoarding(<Popular />)} />
				<Route path="/settings" element={CheckBoarding(<Settings />)} />
				<Route path="/boarding" element={CheckBoarding(<Onboarding />)} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
