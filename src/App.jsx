import Header from "../components/Header.jsx"
import Card from "../components/Card.jsx"
import Overview from "../components/Overview.jsx"
import data from "../data.json"
import { useState } from "react"

function App() {
	const [dark, setDark] = useState(false);
	function toggleDark() {
		setDark(prev => !prev);
	}
	const cards = data.main.map(info => {
		return (
			<Card
				key={info.key}
				logo={info.logo}
				userId={info.userId}
				number={info.number}
				update={info.update}
				updown={info.updown}
				color={info.colorClass}
			/>
		)
	})
	return (
		<div className={dark ? "dark container" : "container"}>
			<Header darkModeFunc={toggleDark} dark={dark} />
			<main>
				{cards}
			</main>
			<Overview />
		</div>
	)
}

export default App
