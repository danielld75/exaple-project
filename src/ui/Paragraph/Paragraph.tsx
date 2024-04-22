import { ComponentProps } from 'react'
import {cn} from '../../utils'

type ParagraphProps = {
	children: string,
} & ComponentProps<'p'>

export const Paragraph = ({ children, className }: ParagraphProps) => {
	return <p className={cn('text-yellow', className)}>{children}</p>
}
