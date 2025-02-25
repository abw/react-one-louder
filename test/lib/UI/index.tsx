import { Alert, AlertProps } from './Alert'
import { Button } from './Button'
import { Button2 } from './Button2'
import { ButtonVariantProps } from './ButtonVariants'
import { ThemedComponent } from './Theme'
export { Alert, type AlertProps } from './Alert'
export { Button, type ButtonProps } from './Button'
export { Button2, type Button2Props } from './Button2'
export { ThemeProvider, type ThemeConfig } from './Theme'

export const ThemedAlert = ThemedComponent<AlertProps>(Alert)
export const ThemedAlert2 = ThemedComponent(Alert)
// export const ThemedButton = ThemedComponent<ButtonProps>(Button)
export const ThemedButton = ThemedComponent(Button)
export const VariantButton = ThemedComponent<ButtonVariantProps>(Button)
export const ThemedButton2 = ThemedComponent(Button2, 'Button')
export const VariantButton2 = ThemedComponent<ButtonVariantProps>(Button2, 'Button')