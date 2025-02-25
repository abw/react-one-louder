const t=`export type AlertProps = {
  text: string,
  title: string,
  type?: 'info' | 'success' | 'warning' | 'error'
}

export type ButtonProps = {
  text: string,
  color?: string
}

export type CheckboxProps = {
  text: string,
  checked?: boolean
}

/* START */
import { AlertProps } from './Alert'
import { ButtonProps } from './Button'
import { CheckboxProps } from './Checkbox'

export type MyUIProps = {
  Alert: AlertProps,
  Button: ButtonProps,
  Checkbox: CheckboxProps,
  // ...etc...
}
`;export{t as default};
