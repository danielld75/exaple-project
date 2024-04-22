import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
	title: 'Example/Text',
	component: Text,
	tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		children:
			'Deserunt ea pariatur magna eiusmod dolore reprehenderit mollit quis pariatur adipisicing voluptate officia. Incididunt culpa tempor officia eu occaecat eu duis dolor consectetur incididunt sint reprehenderit sit. Ex dolore non sint fugiat minim mollit adipisicing. Velit elit anim non officia.',
		className: 'bg-gray-200 text-blue-800 ',
	},
}
export const Secondary: Story = {
	args: {
		children:
			'Deserunt ea pariatur magna eiusmod dolore reprehenderit mollit quis pariatur adipisicing voluptate officia. Incididunt culpa tempor officia eu occaecat eu duis dolor consectetur incididunt sint reprehenderit sit. Ex dolore non sint fugiat minim mollit adipisicing. Velit elit anim non officia.',
		className: 'bg-gray-900 text-white ',
	},
}
