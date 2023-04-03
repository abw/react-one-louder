import React from 'react'
import SimpleThemeSource from '../example/SimpleTheme.jsx?raw'
import ThemeFunctionSource from '../example/ThemeFunction.jsx?raw'
import ThemeFunction from '../example/ThemeFunction.jsx'
import Example from '../site/Example.jsx'

const DefiningThemes = () =>
  <div>
    <h1>Defining Themes</h1>

    <Example code={SimpleThemeSource}>
      We&apos;ve already seen the typical case where you define your theme
      using default properties.  You can include theming options for as
      many components as you need to.
    </Example>

    <Example Element={ThemeFunction} code={ThemeFunctionSource}>
      <p>
        You can also theme a component using a function.  The function will
        be passed any properties that have been specified with the component.
        It should return a set of properties that will be used as defaults.
        Note that these are only the defaults.  In the third case below,
        the <code className="code">quiet</code> property sets the default{' '}
        <code className="code">volume</code> to <code className="code">5</code> {' '}
        and <code className="code">color</code> to <code className="code">black</code>,
        but we can still provide an explicit <code className="code">volume</code> property
        which will take precedence.
      </p>
    </Example>


  </div>

export default DefiningThemes