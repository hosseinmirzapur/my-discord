"use client"

import Image from "next/image"

const NitroHero = () => {
	return (
		<div
			className="
                relative
                text-white
                flex
                flex-col
                gap-5
                lg:flex-row
                mt-[80px]
                lg:mt-0
                bg-gradient-to-b
                from-blue-600
                to-purple-400
        ">
			<video className="hidden lg:block" autoPlay loop muted>
				<source src="/videos/hero.webm" type="video/webm" />
				<source src="/videos/hero2.mp4" type="video/mp4" />
			</video>

			<div
				className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-5
                    lg:absolute
                    lg:top-[30%]
                    lg:w-4/12
                    lg:px-20
                    lg:ml-24
                    w-10/12
                    mx-auto
                    lg:-mt-14
                    mt-10
                ">
				<h1 className="text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
					Unleash more fun with Nitro
				</h1>
				<h3 className="text-lg text-center lg:text-left">
					Subscribe to Nitro to upgrade your emoji, personalize your profile,
					share bigger files, and so much more
				</h3>
			</div>
			<Image
				src={"/images/nitro-hero.png"}
				alt="nitro-hero"
				height={800}
				width={800}
				className="
                    object-contain
                    block
                    lg:hidden
                "
			/>
		</div>
	)
}

export default NitroHero
