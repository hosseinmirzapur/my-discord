"use client"

import Image from "next/image"

import { useState } from "react"
import Input from "../inputs/Input"
import BlueButton from "../button/BlueButton"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const LoginForm = () => {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	return (
		<motion.div
			initial={{ marginTop: "-200px", opacity: "0%" }}
			whileInView={{
				opacity: 1,
				marginTop: 0,
			}}
			transition={{ duration: 0.2 }}
			className="
                fixed
                top-[50%]
                left-[50%]
                translate-x-[-50%]
                translate-y-[-50%]
                bg-[#313338]
				w-full
				h-full
                lg:w-[784px]
                lg:h-[408px]
                rounded-[5px]
                flex
				flex-col
                lg:flex-row
                justify-between
            
            ">
			<div className="pr-16 pl-8 w-full">
				<div className="flex flex-col pt-8 pb-5 items-center w-9/12 mx-auto gap-2">
					<h1 className="text-[#fff] text-center text-2xl font-semibold">
						Welcome Back!
					</h1>
					<p className="opacity-70 text-white text-center font-extralight">
						We{"'"}re so excited to see you again!
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<Input
						label="email or phone number"
						value={email}
						setState={setEmail}
						required
					/>
					<Input
						label="password"
						value={password}
						setState={setPassword}
						required
						type="password"
					/>
				</div>
				<div className="mt-5 lg:mt-2 flex flex-col gap-3">
					<p className="hover:underline text-blue-500 text-sm cursor-pointer font-medium w-auto">
						Forgot your password?
					</p>
					<BlueButton
						label={<div className="text-base">Log in</div>}
						size="small"
					/>
					<div className="text-white font-extralight text-sm flex gap-1">
						<p className="opacity-50">Need an account?</p>{" "}
						<p
							className="hover:underline text-blue-500 text-sm cursor-pointer font-medium w-auto"
							onClick={() => router.push("/register")}>
							Register
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col text-white items-center justify-center pb-5 lg:pb-0">
				<Image
					src={"/images/qrcode.png"}
					alt="qrcode"
					width={175}
					height={175}
					className="object-contain mb-3 mt-3 lg:mt-0"
				/>
				<h1 className="text-2xl font-semibold">Log in with QR Code</h1>
				<p className="opacity-70 text-white font-extralight w-10/12 mx-auto text-center hidden lg:block">
					Scan this with the Discord mobile app to log in instantly
				</p>
			</div>
		</motion.div>
	)
}

export default LoginForm
