import { HTMLButtonAttrs } from './Button'

// Checking it works OK with an interface
export interface Button2Props extends HTMLButtonAttrs {
  text: string
  color?: string
}

export const Button2 = ({ text, color, ...props }: Button2Props) =>
  <button className={color} {...props}>
    {text}
  </button>

export default Button2