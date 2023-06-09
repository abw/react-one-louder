import React from 'react'
import AmpSource from '../example/Amplifier.jsx?raw'
import DefaultAmp from '../example/DefaultAmp.jsx'
import DefaultAmpSource from '../example/DefaultAmp.jsx?raw'
import AmpWithVolume from '../example/AmpWithVolume.jsx'
import AmpWithVolumeSource from '../example/AmpWithVolume.jsx?raw'
import ThemedAmpSource from '../example/ThemedAmplifier.jsx?raw'
import DefaultThemedAmp from '../example/DefaultThemedAmp.jsx'
import DefaultThemedAmpSource from '../example/DefaultThemedAmp.jsx?raw'
import CustomThemedAmp from '../example/CustomThemedAmp.jsx'
import CustomThemedAmpSource from '../example/CustomThemedAmp.jsx?raw'
import Example from '../site/Example.jsx'
import Link from '../site/Link.jsx'


const ThemedComponents = () =>
  <div>
    <h1>Themed Components</h1>
    <p>
      Consider a simple React component like this <code>Amplifier</code>.
    </p>
    <Example code={AmpSource} caption="Amplifier.jsx"/>

    <p>
      If you don&apos;t explicitly provide a <code>volume</code> property
      when you use it then it defaults to 10.
    </p>
    <Example
      Element={DefaultAmp} code={DefaultAmpSource}
      caption="OnStage.jsx"
    />

    <p>
      Of course you can always provide a <code>volume</code> property to
      override the default value.
    </p>
    <Example
      Element={AmpWithVolume} code={AmpWithVolumeSource}
      caption="OnStage.jsx"
    />

    <h2>Themed Components</h2>
    <p>
      That&apos;s all very well as long as you remember to set the volume
      explicitly every time.  Apart from being easy to forget, it&apos;s also
      hard to change.  If you&apos;ve got lots of places where you&apos;re
      using this component and one day someone decides to change the volume
      across the whole site then you&apos;ve got lots of code you need to
      change.
    </p>
    <p>
      This is where the <code>Themed</code> function can be used. Instead
      of exporting your bare component, wrap it up in a call to{' '}
      <code>Themed</code> and provide a name that you can reference it by.
      In most cases, this will be the same name as the component, but it
      doesn&apos;t have to be.
    </p>
    <Example code={ThemedAmpSource} caption="Amplifier.jsx"/>

    <p>
      You can still use it just like you did before.
    </p>
    <Example
      Element={DefaultThemedAmp} code={DefaultThemedAmpSource}
      caption="OnStage.jsx"
    />

    <h2>Theme Provider</h2>
    <p>
      When you need that extra push over the cliff, you can define a{' '}
      <code>Theme.Provider</code>.  This can be anywhere in your code but
      it&apos;s usually best to put it somewhere near the &quot;top&quot; of
      your application so that it encloses all the components that want to
      use it.
    </p>
    <p>
      You provide it with a new set of defaults for any components that
      you&apos;re using and they will automatically be applied to your
      <code>Themed</code> components matching the name. You can still
      provide an explicit <code>volume</code> when you use the component
      if you need to.
    </p>
    <Example
      Element={CustomThemedAmp} code={CustomThemedAmpSource}
      caption="Festival.jsx"
    />

    <Link
      to="/defining-themes" className="read-on"
      text="Read more about defining themes..."
    />
  </div>

export default ThemedComponents