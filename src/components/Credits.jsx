export default function Credits() {
	function openCredits() {
		open("https://www.nytimes.com/", "_blank")
	}

	return (
		<div id="copyright" className="content-copyright">
			<img
				onClick={openCredits}
				title="Data provided by The New York Times"
				alt="Data provided by The New York Times"
				src="https://developer.nytimes.com/files/poweredby_nytimes_30b.png?v=1583354208352">
			</img>
		</div>
	)
}