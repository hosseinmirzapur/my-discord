"use client"

import Image from "next/image"

import { useState } from "react"
import Input from "../inputs/Input"
import BlueButton from "../button/BlueButton"
import Select from "../inputs/Select"
import Checkbox from "../inputs/Checkbox"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

const RegisterForm = () => {
	const router = useRouter()
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [month, setMonth] = useState("")
	const [day, setDay] = useState("")
	const [year, setYear] = useState("")
	const [agree, setAgree] = useState(false)

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
                lg:w-[480px]
                lg:h-[600px]
                rounded-[5px]
                flex
				flex-col
				text-white
            ">
			<div
				className="flex items-center justify-center mt-4 md:hidden"
				onClick={() => router.push("/")}>
				<Image
					src={"/images/discord-logo-white.png"}
					width={130}
					height={130}
					alt="discord-logo"
					className="cursor-pointer"
				/>
			</div>
			<h1 className="text-center text-2xl font-semibold mt-9">
				Create an account
			</h1>

			<div className="flex flex-col w-11/12 lg:w-10/12 mx-auto mt-2 gap-5 lg:gap-4">
				<Input label="Email" setState={setEmail} value={email} type="email" />
				<Input
					label="Username"
					setState={setUsername}
					value={username}
					type="text"
				/>

				<Input
					label="Password"
					setState={setPassword}
					value={password}
					type="password"
				/>
				<div className="uppercase font-semibold text-xs opacity-70">
					date of birth
				</div>
				<div className="flex flex-row gap-2">
					<Select
						placeholder="Month"
						type="month"
						value={month}
						setState={setMonth}
					/>
					<Select placeholder="Day" type="day" value={day} setState={setDay} />
					<Select
						placeholder="Year"
						type="year"
						value={year}
						setState={setYear}
					/>
				</div>
				<div className="flex flex-row mt-1 gap-3">
					<Checkbox checked={agree} setState={setAgree} />
					<p className="text-[11px]">
						I have read and agree to Discord{"'"}s{" "}
						<a
							href="/terms"
							className="text-blue-500 hover:underline underline-offset-1">
							Terms of Service
						</a>{" "}
						and{" "}
						<a
							href="/privacy"
							className="text-blue-500 hover:underline underline-offset-1">
							Privacy Policy
						</a>
						.
					</p>
				</div>

				<BlueButton
					label={"Continue"}
					size="medium"
					className="disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={!agree}
				/>

				<div
					className="text-sm opacity-100"
					onClick={() => router.push("/login")}>
					<p className="text-center text-blue-500 hover:underline hover:underline-offset-1 cursor-pointer">
						Already have an account?
					</p>
				</div>
			</div>
		</motion.div>
	)
}

export default RegisterForm
