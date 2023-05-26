import Image from "next/image"

const LoginPageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="fixed overflow-hidden">
			{children}
			<Image
				alt="login"
				src="/images/login.svg"
				width={1920}
				height={1080}
				className="object-cover hidden lg:block"
			/>
		</div>
	)
}

export default LoginPageLayout
