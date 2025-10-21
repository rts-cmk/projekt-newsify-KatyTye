import { SwitchBackgroundElement } from "../components/SwitchBackground"
import boardingData from "../data/boarding.json"

function Onboarding() {

	return (
		<main className="main-content-boarding">
			<SwitchBackgroundElement source={boardingData} extra={true} />
		</main>
	)
}

export default Onboarding
