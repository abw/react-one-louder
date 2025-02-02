// export type HTMLButtonAttrs = React.ComponentProps<'button'>
export type HTMLButtonAttrs = React.ComponentPropsWithoutRef<'button'>
export type ButtonProps =
  HTMLButtonAttrs & {
  text: string
  color?: string
}

export const Button = ({ text, color, ...props }: ButtonProps) =>
  <button className={color} {...props}>
    {text}
  </button>

export default Button