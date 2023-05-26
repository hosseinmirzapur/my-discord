"use client"

import Button, { ButtonProps } from "./Button"

const WhiteButton: React.FC<ButtonProps> = ({
	label,
	onClick,
	size,
	className,
	disabled,
}) => {
	return (
		<Button
			label={label}
			onClick={onClick}
			size={size}
			className={`bg-[#fff] text-[#000] hover:text-[#5865f2] ${className}`}
			disabled={disabled}
		/>
	)
}

export default WhiteButton
