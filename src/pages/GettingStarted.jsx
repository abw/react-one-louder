import React from 'react'
import CodeBlock from '../site/CodeBlock.jsx'
import Example from '../site/Example.jsx'
import ImportSrc from '../example/Import.jsx?raw'
import ThemedAmpSource from '../example/ThemedAmplifier.jsx?raw'
import CustomThemedAmpSource from '../example/CustomThemedAmp.jsx?raw'
import CustomThemedAmp from '../example/CustomThemedAmp.jsx'
import Link from '../site/Link.jsx'

const GettingStarted = () =>
  <div>
    <h1>Getting Started</h1>
    <p>
      Add the <code className="code">@abw/react-one-louder</code> module to
      your project using your favourite package manager.
    </p>
    <CodeBlock language="bash">
      {`## using npm
$ npm add @abw/one-louder

## using yarn
$ yarn add @abw/one-louder

## using pnpm
$ pnpm add @abw/one-louder
`}
    </CodeBlock>
    <p>
      You can then import the modules and start using them.
    </p>
    <CodeBlock code={ImportSrc}/>

    <h2>Themed Component</h2>
    <p>
      This is how you define a <code className="code">Themed</code> component.
      In this example, the default <code className="code">volume</code> is 10.
    </p>
    <Example code={ThemedAmpSource} caption="Amplifier.jsx"/>

    <h2>Theme Provider</h2>
    <p>
      This is how you define a <code className="code">Theme.Provider</code>.
      Now the default <code className="code">volume</code> for
      an <code className="code">Amplifier</code> is 11.  It&apos;s
      one louder.
    </p>
    <Example
      Element={CustomThemedAmp} code={CustomThemedAmpSource}
      caption="AmplifierExample.jsx"
    />

    <Link
      to="/themed-components" className="read-on"
      text="Read more about themed components..."
    />
  </div>

export default GettingStarted