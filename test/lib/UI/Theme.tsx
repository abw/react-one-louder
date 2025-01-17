import { AlertProps } from './Alert'
import { ButtonProps } from './Button'
import Themer from '../../../lib/Themer'
// import { CheckboxProps } from './Checkbox'
// import { Themeable, ThemeOptions } from '@/lib/types'

export type ThemeConfig = {
  Alert: AlertProps
  Button: ButtonProps
}

//export type LoudAmplifierProps = AmplifierProps & { loud?: boolean }
//export type LoudThemeConfig = ThemeConfig & { Amplifier: LoudAmplifierProps }
//export const Theme = Themer<ThemeConfig>()
//export default Theme

export const Theme  = Themer<ThemeConfig>()
export const ThemeProvider = Theme.Provider
export const ThemedComponent = Theme.Themed


