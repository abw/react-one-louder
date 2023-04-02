# react-one-louder

This is a simple React library for customising components. It is typically
used for theming UI components, but more generally it can be used to provide
sensible "global" defaults for any components in a web site or other application.

If you can see... the numbers all go to eleven. Look... right across the
board. Eleven... eleven... eleven. You see, most blokes will be playing at
ten. You're on ten here... all the way up, all the way up. You're on ten on
your guitar... where can you go from there? Where? Nowhere. Exactly. What we
do is if we need that extra push over the cliff, you know what we do? Put it
up to eleven. Eleven. Exactly. One louder.

## Getting Started

Add the `@abw/react-one-louder` module to your project using your favourite
package manager.

```bash
## using npm
$ npm add @abw/one-louder

## using yarn
$ yarn add @abw/one-louder

## using pnpm
$ pnpm add @abw/one-louder
```

You can then import the modules and start using them.

```jsx
import { Theme, Themed } from '@abw/react-one-louder'
```


## Themed Components

Consider a simple React component like this Amplifier.

```jsx
const Amplifier = ({ volume=10 }) =>
  <div>Amplifier volume is {volume}</div>

export default Amplifier
```

If you don't explicitly provide a volume property when you use it then it
defaults to 10.

```jsx
import Amplifier from './Amplifier.jsx'

const AmplifierExample = () =>
  <Amplifier/>
```

The output would be:

```
Amplifier volume is 10
```

Of course you can always provide a volume property to override the default value.

```jsx
import Amplifier from './Amplifier.jsx'

const AmplifierExample = () =>
  <Amplifier volume={9}/>
```

Now the output is:

```
Amplifier volume is 9
```

That's all very well as long as you remember to set the volume explicitly
every time. Apart from being easy to forget, it's also hard to change. If
you've got lots of places where you're using this component and one day
someone decides to change the volume across the whole site then you've got
lots of code you need to change.

This is where the `Themed` function can be used. Instead of exporting your
bare component, wrap it up in a call to `Themed` and provide a name that you
can reference it by. In most cases, this will be the same name as the
component, but it doesn't have to be.

```jsx
import { Themed } from '@abw/react-one-louder'

const Amplifier = ({ volume=10 }) =>
  <div>Amplifier volume is {volume}</div>

export default Themed(Amplifier, 'Amplifier')
```

You can still use it just like you did before.

```jsx
import Amplifier from './Amplifier.jsx'

const AmplifierExample = () =>
  <>
    <Amplifier/>
    <Amplifier volume={9}/>
  </>
```

The output is:

```
Amplifier volume is 10
Amplifier volume is 9
```

When you need that extra push over the cliff, you can define a
`Theme.Provider`. This can be anywhere in your code but it's usually best
to put it somewhere near the "top" of your application so that it encloses
all the components that want to use it.

You provide it with a new set of defaults for any components that you're
using and they will automatically be applied to your `Themed` components
matching the name. You can still provide an explicit `volume` when you use
the component if you need to.

```jsx
import Amplifier from './Amplifier.jsx'
import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: {
    volume: 11
  }
}

const AmplifierExample = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier volume={9}/>
  </Theme.Provider>
```

The output is now:

```
Amplifier volume is 11
Amplifier volume is 9
```

## Defining Themes

We've already seen the typical case where you define your theme using
default properties. You can include theming options for as many components
as you need to.

```jsx
import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Guitar: {
    volume: 11,
  },
  Amplifier: {
    volume: 11
  },
  Drummer: {
    lifeInsurance: true,
    fireExtinguisher: true,
    gardeningAccident: false,
  }
}

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    {/* ...your site code... */}
  </Theme.Provider>
```

You can also theme a component using a function. The function will be
passed any properties that have been specified with the component. It
should return a set of properties that will be used as defaults. Note that
these are only the defaults. In the third case below, the `quiet` property
sets the default `volume` to `5` and `color` to `black`, but we can still
provide an explicit `volume` property which will take precedence.

```jsx
import { Theme } from '@abw/react-one-louder'

const MyTheme = {
  Amplifier: props => props.quiet
    ? { volume: 5,  color: 'black' }
    : { volume: 11, color: 'none more black' }
}

const YourApplication = () =>
  <Theme.Provider {...MyTheme}>
    <Amplifier/>
    <Amplifier quiet/>
    <Amplifier quiet volume={6}/>
  </Theme.Provider>
```

The output is:

```
Amplifier volume is 11
Amplifier volume is 5
Amplifier volume is 6
```