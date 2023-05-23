import Image from "next/image"
import LoginForm from "../components/forms/LoginForm"

const LoginPage = () => {
	return (
		<div className="relative overflow-hidden">
			<LoginForm />
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

export default LoginPage
