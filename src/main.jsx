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
				<Route index element={<App />} />
				<Route path="*" element={<App />} />
				<Route path="/archive" element={<Archive />} />
				<Route path="/popular" element={<Popular />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/boarding" element={<Onboarding />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
