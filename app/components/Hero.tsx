"use client"

import Image from "next/image"

// ** Assets
import leftImage from "../../public/images/2.svg"
import rightImage from "../../public/images/3.svg"
import Button from "./button/Button"
import { RxDownload } from "react-icons/rx"

const Hero = () => {
	return (
		<div className="relative overflow-hidden pt-20 md:pt-44 pb-40 md:pb-0 bg-[#5865f2]">
			<div className="absolute text-center text-white flex flex-col gap-12 -mt-14">
				<h1 className="uppercase text-2xl md:text-7xl font-extrabold">
					Imagine a Place...
				</h1>
				<p className="w-10/12 md:w-5/12 mx-auto text-xl">
					...where you can belong to a school club, a gaming group, or a
					worldwide art community. Where just you and a handful of friends can
					spend time together. A place that makes it easy to talk every day and
					hang out more often.
				</p>
				<div className="flex flex-col md:flex-row justify-center gap-6 w-8/12 mx-auto md:w-auto">
					<Button
						label={
							<div className="flex flex-row gap-2">
								<RxDownload size={28} />
								Download for Windows
							</div>
						}
						size="large"
						variant="primary"
					/>
					<Button
						label="Open Discord in your browser"
						size="large"
						variant="secondary"
					/>
				</div>
			</div>

			<div className="flex justify-around flex-row space-x-[700px] mt-20">
				<Image src={leftImage} alt="left-image" className="mr-[50px]" />
				<Image src={rightImage} alt="right-image" className="ml-[150px]" />
			</div>
		</div>
	)
}

export default Hero
