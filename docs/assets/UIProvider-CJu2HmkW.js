const e=`import { MyUIThemeProvider } from './MyUITheme'
import { MyThemedButton } from './MyUIComponents'

export const MyApp = () =>
  <MyUIThemeProvider Button={{ color: 'blue' }}>
    {/* some application code goes here */}
    <MyThemedButton text="Hello World"/>
    {/* more application code goes here */}
  </MyUIThemeProvider>`;export{e as default};
