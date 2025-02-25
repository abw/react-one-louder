import React from 'react'

export type AlertProps = {
  text: string,
  title: string,
  type?: 'info' | 'success' | 'warning' | 'error'
}

export const Alert = (props: AlertProps) =>
  <div>
    {/* your component markup here */}
  </div>


