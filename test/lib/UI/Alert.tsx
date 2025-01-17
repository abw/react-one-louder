import React from 'react'

export type AlertProps = {
  text: string
  title: string
  type?: 'info' | 'success' | 'warning' | 'error'
}

export type AlertType = React.FC<AlertProps>

export const Alert: AlertType = ({ text, title, type }) =>
  <div className={`alert ${type||''}`}>
    <h3>{title}</h3>
    {text}
  </div>

export default Alert