import React from 'react'
import MarshallSrc from '../example/MarshallAmplifier.jsx?raw'
import ComponentSwap from '../example/ComponentSwap.jsx'
import ComponentSwapSrc from '../example/ComponentSwap.jsx?raw'
import ComponentSwap2 from '../example/ComponentSwap2.jsx'
import ComponentSwap2Src from '../example/ComponentSwap2.jsx?raw'
import ComponentSwap3 from '../example/ComponentSwap3.jsx'
import ComponentSwap3Src from '../example/ComponentSwap3.jsx?raw'
import ComponentSwap4 from '../example/ComponentSwap4.jsx'
import ComponentSwap4Src from '../example/ComponentSwap4.jsx?raw'
import Example from '../site/Example.jsx'

const ComponentSubstitution = () =>
  <div>
    <h1>Component Substitution</h1>

    <p>
      You can use the theming engine to substitute one component for another.
      Consider the case where we have a special kind of amplifier.
    </p>
    <Example code={MarshallSrc} caption="Marshall.jsx"/>

    <p>
      Your band has just signed a lucrative sponsorship deal with the
      amplifier manufacturer.  Wherever you were using an{' '}
      <code>Amplifier</code> you want to swap it out for the new branded{' '}
      <code>Marshall</code>.
    </p>

    <h2>Render Function</h2>
    <p>
      You can define your theming function to render the new component and
      return the result.  You don&apos;t need to change any of your application
      code.  The theming engine takes care of swapping one component for
      another.
    </p>
    <Example
      Element={ComponentSwap} code={ComponentSwapSrc}
      caption="OnStage.jsx"
    />

    <div className="note">
      <h4>Note</h4>
      <p>
        The function is called with 3 arguments.  The first is the object
        of properties, shown here as <code>props</code> .  The second is any{' '}
        <code>ref</code> that should be forwarded to the component.  The third
        is the complete theming <code>context</code> in case you need to look up
        any other theming rules.
      </p>
    </div>

    <h2>Substitute Component</h2>
    <p>
      As a shortcut you can define the theme entry to be an array containing
      the substitute component as the first element.  This is ideal for those
      cases where you just want to substitute one component for another but
      with all the other properties remaining the same.
    </p>
    <Example
      Element={ComponentSwap2} code={ComponentSwap2Src}
      caption="OnStage.jsx"
    />

    <h2>Substitute Component With Defaults</h2>
    <p>
      You can also provide a set of default properties as the second element.
    </p>
    <Example
      Element={ComponentSwap3} code={ComponentSwap3Src}
      caption="OnStage.jsx"
    />

    <h2>Substitute Component With Theming Function</h2>
    <p>
      Or the second element can be a theming function.
    </p>
    <Example
      Element={ComponentSwap4} code={ComponentSwap4Src}
      caption="OnStage.jsx"
    />

  </div>

export default ComponentSubstitution