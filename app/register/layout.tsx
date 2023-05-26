import Image from "next/image"

const RegisterPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="fixed overflow-hidden">
			{children}
			<Image
				alt="login"
				src="/images/login.svg"
				width={1920}
				height={1080}
				className="object-cover hidden md:block"
			/>
		</div>
	)
}

export default RegisterPageLayout
