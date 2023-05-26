import NitroHero from "../components/hero/NitroHero"
import Navbar from "../components/navbar/Navbar"

const NitroPage = () => {
	return (
		<>
			<Navbar classname="fixed bg-[#5865f2] lg:bg-transparent lg:absolute top-0 w-full z-10" />
			<NitroHero />
		</>
	)
}

export default NitroPage
