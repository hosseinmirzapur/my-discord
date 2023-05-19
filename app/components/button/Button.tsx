"use client"

interface ButtonProps {
	label: string | any
	onClick?: () => void
	size?: "small" | "medium" | "large"
	variant?: "primary" | "secondary"
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	size = "small",
	variant = "primary",
}) => {
	return (
		<button
			onClick={onClick}
			className={`
                w-auto
                ${size === "small" ? "h-10" : "h-16"}
                rounded-[40px]
                ${
									variant === "primary"
										? "bg-gray-100 text-black"
										: "bg-black text-white"
								}
                bg-gray-100
                flex
                items-center
                justify-center
                text-center
                cursor-pointer
                ${
									size === "small"
										? "text-xs"
										: size === "medium"
										? "text-base"
										: "text-lg"
								}
                
        `}>
			<div className={`${size === "small" ? "px-4" : "px-6"}`}>{label}</div>
		</button>
	)
}

export default Button
