"use client"

import Button, { ButtonProps } from "./Button"

const BlackButton: React.FC<ButtonProps> = ({ label, onClick, size }) => {
	return (
		<Button
			label={label}
			onClick={onClick}
			size={size}
			className="bg-[#000] text-[#fff] hover:bg-[#23272a]"
		/>
	)
}

export default BlackButton
