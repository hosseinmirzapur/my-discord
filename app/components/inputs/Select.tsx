"use client"

import SelectInput from "react-select"

interface SelectOption {
	label: string
	value: string | number
}

interface SelectProps {
	options?: SelectOption[]
	placeholder?: string
	type?: "month" | "day" | "year"
	value?: string | number
	setState: (e: any) => void
}

const Select: React.FC<SelectProps> = ({
	options,
	placeholder,
	type,
	value,
	setState,
}) => {
	if (type === "month") {
		options = [
			{ label: "January", value: "01" },
			{ label: "February", value: "02" },
			{ label: "March", value: "03" },
			{ label: "April", value: "04" },
			{ label: "May", value: "05" },
			{ label: "June", value: "06" },
			{ label: "July", value: "07" },
			{ label: "August", value: "08" },
			{ label: "September", value: "09" },
			{ label: "October", value: "10" },
			{ label: "November", value: "11" },
			{ label: "December", value: "12" },
		]
	}
	if (type === "day") {
		let days = []
		for (let i = 1; i <= 31; i++) {
			days.push({ label: i.toString(), value: i.toString() })
		}
		if (!options) {
			options = days
		}
	}

	if (type === "year") {
		let years = []
		for (let i = 1871; i <= 2020; i++) {
			years.push({ label: i.toString(), value: i.toString() })
		}
		if (!options) {
			options = years.reverse()
		}
	}

	return (
		<SelectInput
			styles={{
				control: (baseStyles, state) => ({
					...baseStyles,
					backgroundColor: "#1b1e21",
					borderColor: state.isFocused ? "#fff" : "#1b1e21",
					":focus": {
						borderColor: "#1b1e21",
					},
				}),
				indicatorsContainer: () => ({
					hyphens: "none",
				}),

				menuList: (baseStyles, state) => ({
					...baseStyles,
					backgroundColor: "#313338",
					scrollBehavior: "smooth",
					"::-webkit-scrollbar": {
						width: "0",
					},
				}),
				option: (baseStyles, state) => ({
					...baseStyles,
					":hover": {
						backgroundColor: "grey",
						color: "bg-white-100",
						transition: "ease-in",
						transitionDuration: "300ms",
					},
					backgroundColor: "#313338",
				}),
				valueContainer: (baseStyles, state) => ({
					...baseStyles,
					WebkitTextFillColor: "#fff",
				}),
			}}
			menuPosition="absolute"
			placeholder={placeholder}
			options={options}
			isSearchable
			value={options?.find((e) => e.value === value)}
			onChange={(e) => setState(e?.value)}
			className="w-full"
			menuPlacement="top"
		/>
	)
}

export default Select
