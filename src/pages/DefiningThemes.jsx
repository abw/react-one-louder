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
        It should return a set of properties that will be applied to the
        component.
      </p>
      <p>
        It&apos;s up to you if your function should override any properties
        specified with the component or accept them.  In this example the
        theming function looks to see if the <code>quiet</code> property has
        been specified. If it has then it sets the <code>volume</code> to{' '}
        <code>5</code> with no exceptions.  Setting the <code>volume</code>{' '}
        to <code>6</code>, as shown on line 13, has no effect.  On the other
        hand, the theming function only sets the <code>color</code> property
        as a default.  It&apos;s still possible to set the <code>color</code>{' '}
        explicitly when the component is used and that will take precedence.
      </p>
    </Example>


  </div>

export default DefiningThemes