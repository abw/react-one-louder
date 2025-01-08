import React from 'react'

export type AlertProps = {
  text: string,
  title: string,
  type?: 'info' | 'success' | 'warning' | 'error'
}

export const Alert = ({ text, title, type }: AlertProps) =>
  <div className={`alert ${type||''}`}>
    <h3>{title}</h3>
    {text}
  </div>

export default Alert