"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const WhatsNew = () => {
	return (
		<div
			className="
                flex
                flex-col
                gap-10
                rounded-md
                w-[93%]
                lg:w-[98%]
                mx-auto
                bg-gradient-to-br
                from-[#8547c6]
                to-[#ab5d8a]
                mt-40
                text-white
                relative
                pb-20
            ">
			<Image
				src={"/images/whatsnewright.svg"}
				alt="whats-new-right"
				width={250}
				height={250}
				className="object-contain absolute right-0 top-20 hidden lg:block"
			/>
			<Image
				src={"/images/whatsnewleft.svg"}
				alt="whats-new-left"
				width={260}
				height={260}
				className="object-contain absolute left-0 top-24 hidden lg:block"
			/>
			<h1 className="text-2xl lg:text-5xl font-bold text-center mt-20">
				What{"'"}s New With Nitro
			</h1>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5, bounce: 0.5 }}
				viewport={{ once: true }}
				className="flex justify-center items-center">
				<iframe
					src="https://www.youtube.com/embed/G1teGChUJQM"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					className="rounded-xl w-[90%] h-[406px] lg:w-[780px] lg:h-[406px]"
					allowFullScreen
				/>
			</motion.div>
		</div>
	)
}

export default WhatsNew
