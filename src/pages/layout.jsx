import { Outlet } from "react-router";
import LogoFooter from "../components/LogoFooter";
import LogoHeader from "../components/LogoHeader";

export default function Layout() {
	return (
		<>
			<LogoHeader containsSearchBar />
			<Outlet />
			<LogoFooter />
		</>
	)
}