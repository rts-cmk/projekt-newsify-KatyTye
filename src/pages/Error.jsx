import LogoHeader from "../components/LogoHeader"
import LogoFooter from "../components/LogoFooter"

export function Error() {
	return (
		<>
			<LogoHeader containsSearchBar />
			<main className="main-content-error">
				<h2 className="main-content-error__error-title">404 - Page Not Found</h2>
				<p className="main-content-error__error-message">Sorry, the page you are looking for does not exist.</p>
			</main>

			<LogoFooter />
		</>
	)
}

export default Error