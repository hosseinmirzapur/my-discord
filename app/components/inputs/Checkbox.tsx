"use client"

import { useState } from "react"
import { AiOutlineCheck } from "react-icons/ai"

interface CheckboxProps {
	checked: boolean
	setState: (checked: boolean) => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, setState }) => {
	const uncheck = () => setState(false)

	return (
		<div onClick={uncheck}>
			{checked && (
				<div className="w-[24px] h-[24px] bg-indigo-400 rounded-[5px] cursor-pointer flex justify-center items-center">
					<AiOutlineCheck />
				</div>
			)}
			<input
				type="checkbox"
				className="
                    w-6
                    h-6
                    bg-[#313338]
                    rounded-[5px]
                    cursor-pointer
                    appearance-none
                    border-[1px]
                    border-gray-300
                    checked:hidden
                    
            "
				onChange={(e) => setState(e.target.checked)}
				checked={checked}
			/>
		</div>
	)
}

export default Checkbox
