import { Outlet } from "react-router";
import LogoFooter from "../components/LogoFooter";
import LogoHeader from "../components/LogoHeader";
import Credits from "../components/Credits";

export default function Layout() {
	return (
		<>
			<Credits />
			<LogoHeader containsSearchBar />
			<Outlet />
			<LogoFooter />
		</>
	)
}