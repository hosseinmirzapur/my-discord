"use client"

export interface ButtonProps {
	label: string | any
	onClick?: () => void
	size?: "small" | "medium" | "large"
	className?: string
	disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	size,
	className,
	disabled,
}) => {
	const textSize = () => {
		switch (size) {
			case "small":
				return "text-xs"
			case "medium":
				return "text-base"
			case "large":
				return "text-lg"
			default:
				return ""
		}
	}

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
				${className}
                w-auto
                ${size === "small" ? "h-10" : "h-16"}
                rounded-[40px]
                flex
                items-center
                justify-center
                text-center
                cursor-pointer
                ${textSize()}
				hover:shadow-2xl
				duration-200
				ease-in
                
        `}>
			<div className={`${size === "small" ? "px-4" : "px-6"}`}>{label}</div>
		</button>
	)
}

export default Button
