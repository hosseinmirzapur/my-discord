"use client"

import Image from "next/image"
import Container from "../Container"
import BlueButton from "../button/BlueButton"
import FooterItems from "./FooterItems"
import SocialMedia from "./SocialMedia"
import { useRouter } from "next/navigation"

const Footer = () => {
	const router = useRouter()

	return (
		<div className="bg-[#23272a] text-[#fff] pb-20">
			<Container className="pt-12 px-22">
				<div className="flex flex-col md:justify-start md:flex-row gap-20 md:gap-40 pb-10">
					<SocialMedia />
					<FooterItems />
				</div>
				<hr className="bg-[#5865f2] border-separate border-[#5865f2]" />
				<div className="flex flex-row justify-between pt-10">
					<Image
						alt="logo"
						src={"/images/discord-logo-white.png"}
						width={124}
						height={34}
						className="object-contain cursor-pointer"
						onClick={() => router.push("/")}
					/>
					<BlueButton
						label={<p className="font-sans]">Sign up</p>}
						size="small"
					/>
				</div>
			</Container>
		</div>
	)
}

export default Footer
