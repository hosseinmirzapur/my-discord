"use client"

export interface InputProps {
	type?:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "text"
	setState: (e: any) => void
	value: any
	label: string
	required?: boolean
}

const Input: React.FC<InputProps> = ({
	setState,
	type,
	value,
	label,
	required,
}) => {
	return (
		<div className="flex flex-col gap-3">
			<div className="flex flex-row gap-1">
				<p className="text-white uppercase font-semibold text-xs opacity-70">
					{label}
				</p>
				{required && <span className="text-red-500 opacity-90 text-xs">*</span>}
			</div>
			<input
				type={type}
				value={value}
				onChange={(e) => setState(e.target.value)}
				required={required}
				className="
					bg-[#1b1e21]
					caret-white
					text-white
					outline-none
					h-[40px]
					px-3
					rounded-sm
				"
			/>
		</div>
	)
}

export default Input
