import { CheckBoarding } from './components/CheckBoarding.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import Archive from './pages/Archive.jsx'
import Popular from './pages/Popular.jsx'
import Settings from './pages/Settings.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import { StrictMode } from 'react'
import "./styles/main.sass"

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={CheckBoarding(<Home />)} />
				<Route path="*" element={CheckBoarding(<Error />)} />
				<Route path="/archive" element={CheckBoarding(<Archive />)} />
				<Route path="/popular" element={CheckBoarding(<Popular />)} />
				<Route path="/settings" element={CheckBoarding(<Settings />)} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
