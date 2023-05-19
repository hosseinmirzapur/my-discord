import Hero from "./components/Hero"
import Navbar from "./components/navbar/Navbar"

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Navbar />
			<Hero />
		</div>
	)
}
