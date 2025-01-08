import { Alert, AlertProps } from './Alert'
import { Button, ButtonProps } from './Button'
import { ButtonVariantProps } from './ButtonVariants'
import { ThemedComponent } from './Theme'
export { Alert, AlertProps } from './Alert'
export { Button, ButtonProps } from './Button'
export { ThemeProvider, ThemeConfig } from './Theme'

export const ThemedAlert = ThemedComponent<AlertProps>(Alert)
export const ThemedButton = ThemedComponent<ButtonProps>(Button)
export const VariantButton = ThemedComponent<ButtonVariantProps>(Button)