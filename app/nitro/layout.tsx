import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

const NitroPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	)
}

export default NitroPageLayout
