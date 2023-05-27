import Navbar from "../components/navbar/Navbar"
import NitroHero from "../components/hero/NitroHero"
import NitroPlan, { NitroItem } from "../components/NitroPlan"
import WhatsNew from "../components/WhatsNew"

const nitroBasicItems: NitroItem[] = [
	{
		icon: "/images/upload.svg",
		title: "50MB uploads",
	},
	{
		icon: "/images/emoji.svg",
		title: "Custom emoji anywhere",
	},
	{
		icon: "/images/nitro.svg",
		title: "Special Nitro badge on your profile",
	},
]

const nitroItems: NitroItem[] = [
	{
		icon: "/images/upload.svg",
		title: "500MB uploads",
	},
	{
		icon: "/images/emoji.svg",
		title: "Custom emoji anywhere",
	},
	{
		icon: "/images/stream.svg",
		title: "HD video streaming",
	},
	{
		icon: "/images/rocket.svg",
		title: "Access to Activities",
	},
	{
		icon: "/images/boost.svg",
		title: "2 Server Boosts",
	},
	{
		icon: "/images/credentials.svg",
		title: "Custom profiles and more!",
	},
]

const NitroPage = () => {
	return (
		<>
			<Navbar classname="fixed bg-[#5865f2] lg:bg-transparent lg:absolute top-0 w-full z-10" />
			<NitroHero />
			<div className="flex flex-col items-center justify-center lg:flex-row gap-48 lg:gap-6 lg:w-9/12 mx-auto relative">
				<NitroPlan
					title="Nitro Basic"
					items={nitroBasicItems}
					className="
						bg-gradient-to-br
						from-[#007cc2]
						to-[#5865f2]
						p-10
						-mt-44
					"
				/>
				<NitroPlan
					title="Nitro"
					items={nitroItems}
					className="
						bg-gradient-to-br
						from-[#8547c6]
						to-[#ab5d8a]
						p-10
						-mt-44
					"
				/>
			</div>
			<WhatsNew />
		</>
	)
}

export default NitroPage
