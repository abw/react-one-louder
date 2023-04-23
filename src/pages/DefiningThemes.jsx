import React from 'react'
import SimpleThemeSource from '../example/SimpleTheme.jsx?raw'
import ThemeFunctionSource from '../example/ThemeFunction.jsx?raw'
import ThemeFunction from '../example/ThemeFunction.jsx'
import ThemeDefaultsSource from '../example/ThemeDefaults.jsx?raw'
import ThemeDefaults from '../example/ThemeDefaults.jsx'
import Example from '../site/Example.jsx'
import Link from '../site/Link.jsx'

const DefiningThemes = () =>
  <div>
    <h1>Defining Themes</h1>

    <Example code={SimpleThemeSource} caption="OnStage.jsx">
      We&apos;ve already seen the typical case where you define your theme
      using default properties.  You can include theming options for as
      many components as you need to.
    </Example>

    <Example Element={ThemeFunction} code={ThemeFunctionSource} caption="OnStage.jsx">
      <p>
        You can also theme a component using a function.  The function will
        be passed any properties that have been specified with the component.
        It should return a set of properties that will be applied to the
        component.
      </p>
    </Example>

    <Example Element={ThemeDefaults} code={ThemeDefaultsSource} caption="OnStage.jsx">
      <p>
        It&apos;s up to you if your function should override any properties
        specified with the component or accept them.  In the previous example
        the theming function looks to see if the <code>quiet</code> property
        has been specified. If it has then it sets the <code>volume</code> to{' '}
        <code>5</code> with no exceptions.  Setting the <code>volume</code>{' '}
        to <code>6</code>, as shown on line 13, has no effect.
      </p>
      <p>
        You can write the theming function to accept any values specified as
        properties if you prefer.  In this next example the{' '}
        <code>volume</code> is only set in cases where an explicit property
        is not provided.  Now we can override the volume if necessary as
        show on line 13.
      </p>
    </Example>
    <Link
      to="/component-substitution" className="read-on"
      text="Component substitution..."
    />

  </div>

export default DefiningThemes