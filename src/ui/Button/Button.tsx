import { MouseEventHandler } from 'react'

type ButtonProps = {
	label: string
	onClick: MouseEventHandler<HTMLButtonElement>
}

export const ButtonBlue = ({ label, onClick }: ButtonProps) => {
	return (
		<button className='rounded-lg bg-blue-300 hover:bg-blue-400 text-gray-700' onClick={onClick}>
			{label}
		</button>
	)
}

export const ButtonGreen = ({ label, onClick }: ButtonProps) => {
	return (
		<button className='rounded-lg bg-green-300 hover:bg-green-400 text-gray-700' onClick={onClick}>
			{label}
		</button>
	)
}

export const ButtonRed = ({ label, onClick }: ButtonProps) => {
	return (
		<button className='rounded-lg bg-red-300 hover:bg-red-400 text-gray-700' onClick={onClick}>
			{label}
		</button>
	)
}
