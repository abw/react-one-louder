import { MyUIThemeProvider } from './MyUITheme'
import { MyThemedButton } from './MyUIComponents'

const ThemeConfig: MyUIProps = {
  Button: {
    color: 'blue'
  },
  Alert: {
    type: 'info'
  }
}

export const MyApp = () =>
  <MyUIThemeProvider {...ThemeConfig as MyUIProps}>
    {/* some application code goes here */}
    <MyThemedButton text="Hello World"/>
    {/* more application code goes here */}
  </MyUIThemeProvider>