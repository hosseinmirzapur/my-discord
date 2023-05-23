"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export interface HomeMiddleProps {
	imageSrc: string
	title: string
	description: string
	className?: string
	imageWidth: number
	imageHeight: number
}

const HomeMiddle: React.FC<HomeMiddleProps> = ({
	imageSrc,
	title,
	description,
	className,
	imageHeight,
	imageWidth,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{
				opacity: 1,
			}}
			transition={{ duration: 0.5, ease: "easeIn" }}
			viewport={{
				once: true,
			}}
			className={className}>
			<Image
				src={imageSrc}
				width={imageWidth}
				height={imageHeight}
				alt={title}
				priority
				className="md:-mt-20 "
			/>

			<div className="flex flex-col gap-10">
				<h2 className="flex text-center text-2xl md:text-4xl font-extrabold uppercase font-sans opacity-80">
					{title}
				</h2>
				<h4 className="font-serif text-base md:text-2xl">{description}</h4>
			</div>
		</motion.div>
	)
}

export default HomeMiddle
