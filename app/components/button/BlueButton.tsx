"use client"

import Button, { ButtonProps } from "./Button"

const BlueButton: React.FC<ButtonProps> = ({ label, onClick, size }) => {
	return (
		<Button
			label={label}
			onClick={onClick}
			size={size}
			className="bg-[#5865f2] text-[#fff]"
		/>
	)
}

export default BlueButton
