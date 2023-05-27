"use client"

import Image from "next/image"
import WhiteButton from "./button/WhiteButton"
import { motion } from "framer-motion"

export interface NitroItem {
	title: string
	icon: string
}

interface NitroPlanProps {
	title: string
	items: NitroItem[]
	className?: string
}

const NitroPlan: React.FC<NitroPlanProps> = ({ items, title, className }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{
				once: true,
			}}
			className={`
                ${className}
                w-10/12
                mx-auto
                h-[408px]
                flex
                flex-col
                gap-4
                text-white
                rounded-xl
				relative
            `}>
			<h2 className="text-4xl font-bold italic">{title}</h2>
			<div className="flex flex-col gap-4">
				{items.map((item, index) => (
					<div className="flex flex-row gap-2" key={index}>
						<Image src={item.icon} width={20} height={20} alt={item.title} />
						<h4>{item.title}</h4>
					</div>
				))}
			</div>

			<motion.div
				whileTap={{
					opacity: 0.5,
				}}
				transition={{ duration: 0.5 }}
				className="flex justify-center">
				<WhiteButton
					label={"Subscribe"}
					size="large"
					className="absolute bottom-3 w-[90%] h-[50px]"
				/>
			</motion.div>
		</motion.div>
	)
}

export default NitroPlan
