import Image from "next/image"
import Container from "./components/Container"
import Hero from "./components/Hero"
import HomeMiddle, { HomeMiddleProps } from "./components/HomeMiddle"
import BlueButton from "./components/button/BlueButton"
import { RxDownload } from "react-icons/rx"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

const pageData: HomeMiddleProps[] = [
	{
		title: "Create an invite-only place where you belong",
		description:
			"Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
		imageSrc: "/images/part1.svg",
		className: "flex flex-col lg:flex-row gap-10 md:gap-24",
		imageHeight: 2000,
		imageWidth: 2000,
	},
	{
		title: "Where hanging out is easy",
		description:
			"Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.",
		imageSrc: "/images/part2.svg",
		className: "flex flex-col lg:flex-row-reverse gap-10 md:gap-24",
		imageHeight: 2000,
		imageWidth: 2000,
	},
	{
		title: "From few to a fandom",
		description:
			"Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
		imageSrc: "/images/part3.svg",
		className: "flex flex-col lg:flex-row gap-10 md:gap-24",
		imageHeight: 2000,
		imageWidth: 2000,
	},
	{
		title: "Reliable Tech For Staying Close",
		description:
			"Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.",
		imageSrc: "/images/part4.svg",
		className: "flex flex-col-reverse gap-12",
		imageWidth: 2000,
		imageHeight: 2000,
	},
]

export default function Home() {
	return (
		<div>
			<Navbar classname="bg-[#5865f2]" />
			<Hero />
			<Container className="flex flex-col pt-20 pb-10 md:pt-40 md:pb-20 gap-40 md:gap-80">
				{pageData.map((data, index) => (
					<HomeMiddle
						key={index}
						title={data.title}
						description={data.description}
						imageSrc={data.imageSrc}
						imageHeight={data.imageHeight}
						imageWidth={data.imageWidth}
						className={data.className}
					/>
				))}
				<div className="relative flex items-center align-middle justify-center mt-10 md:-mt-28 mb-10">
					<Image
						src={"/images/part5.svg"}
						alt="sparkles"
						className="object-contain absolute"
						width={500}
						height={500}
					/>
					<div className="flex flex-col items-center justify-center gap-10  md:mb-32">
						<p className="text-center text-3xl font-bold">
							Ready to start your journey?
						</p>
						<BlueButton
							label={
								<div className="flex flex-row gap-2">
									<RxDownload size={28} />
									Download for Desktop
								</div>
							}
							size="large"
						/>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	)
}
