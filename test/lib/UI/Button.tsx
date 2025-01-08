import React from 'react'

export type ButtonProps = {
  text: string,
  color?: string
}

export const Button = ({ text, color }: ButtonProps) =>
  <button className={color}>
    {text}
  </button>

export default Button