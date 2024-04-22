import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonBlue } from './Button';

const meta = {
  title: 'Example/ButtonBlue',
  component: ButtonBlue,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonBlue>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};


