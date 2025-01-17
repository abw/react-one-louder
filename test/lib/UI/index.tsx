import { Alert, AlertProps } from './Alert'
import { Button, ButtonProps } from './Button'
import { ButtonVariantProps } from './ButtonVariants'
import { ThemedComponent } from './Theme'
export { Alert, type AlertProps } from './Alert'
export { Button, type ButtonProps } from './Button'
export { ThemeProvider, type ThemeConfig } from './Theme'

export const ThemedAlert = ThemedComponent<AlertProps>(Alert)
export const ThemedAlert2 = ThemedComponent(Alert)
// export const ThemedButton = ThemedComponent<ButtonProps>(Button)
export const ThemedButton = ThemedComponent<ButtonProps>(Button)
export const VariantButton = ThemedComponent<ButtonVariantProps>(Button)