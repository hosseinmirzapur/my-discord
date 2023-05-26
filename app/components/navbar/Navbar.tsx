"use client"

import Image from "next/image"
import Search from "./Search"
import { ImMenu } from "react-icons/im"
import { useRouter } from "next/navigation"
import WhiteButton from "../button/WhiteButton"

interface Navbar {
	loggedIn?: boolean
	classname?: string
}

const Navbar: React.FC<Navbar> = ({ loggedIn = false, classname }) => {
	// ** Variables
	const router = useRouter()

	return (
		<div
			className={`
                flex
                flex-row
                justify-between
                items-center
                h-[80px]
				px-5
                lg:px-44
				${classname}
			`}>
			<div onClick={() => router.push("/")} className="cursor-pointer">
				<Image
					src={"/images/discord-logo-white.png"}
					alt="Discord Logo"
					width={125}
					height={125}
					className="object-contain"
				/>
			</div>

			<div className="hidden lg:flex flex-row justify-between items-center gap-9 text-white font-bold">
				<div className="hover:underline cursor-pointer transition">
					Download
				</div>
				<div
					className="hover:underline cursor-pointer transition"
					onClick={() => router.push("/nitro")}>
					Nitro
				</div>
				<div className="hover:underline cursor-pointer transition">
					Discover
				</div>
				<div className="hover:underline cursor-pointer transition">Safety</div>
				<div className="hover:underline cursor-pointer transition">Support</div>
				<div className="hover:underline cursor-pointer transition">Blog</div>
				<div className="hover:underline cursor-pointer transition">Careers</div>
			</div>

			<div className="flex flex-row justify-between items-center gap-5">
				{loggedIn && <Search />}
				<WhiteButton
					onClick={() => router.push("/login")}
					label={"Login"}
					size="small"
				/>
				<ImMenu
					color="#fff"
					className="
                        cursor-pointer
                        font-extrabold
                        w-[33px]
                        h-[35px]
                        md:hidden
                    "
				/>
			</div>
		</div>
	)
}

export default Navbar
