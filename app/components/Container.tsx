"use client"

interface ContainerProps {
	children: React.ReactNode
	className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div
			className={`
				w-10/12
				md:w-9/12
				mx-auto
				${className}
		`}>
			{children}
		</div>
	)
}

export default Container
