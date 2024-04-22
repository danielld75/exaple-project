type TextProps = {
  children: string,
  className?: string
}

export const Text = ({children, className}: TextProps) => {
  return <span className={className}>{children}</span>
}
