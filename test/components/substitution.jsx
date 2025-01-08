import React from 'react'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Amplifier from '../lib/Amplifier'
import Marshall from '../lib/Marshall'
import { Theme } from '../../lib/index'

it(
  'component substitution',
  () => {
    const MyTheme = {
      Amplifier: [Marshall]
    }
    render(
      <Theme.Provider {...MyTheme}>
        <Amplifier/>
        <Amplifier id={2} volume={11}/>
      </Theme.Provider>
    )
    expect(screen.getByText(/Marshall amplifier #1/))
      .toHaveTextContent('Marshall amplifier #1 volume is 10')
    expect(screen.getByText(/Marshall amplifier #2/))
      .toHaveTextContent('Marshall amplifier #2 volume is 11')
  }
)
it(
  'themed component substitution',
  () => {
    const MyTheme = {
      Amplifier: [Marshall, { volume: 11 } ]
    }
    render(
      <Theme.Provider {...MyTheme}>
        <Amplifier/>
      </Theme.Provider>
    )
    expect(screen.getByText(/Marshall amplifier #1/))
      .toHaveTextContent('Marshall amplifier #1 volume is 11')
  }
)
it(
  'themed component function',
  () => {
    const MyTheme = {
      Amplifier: [
        Marshall,
        props => props.quiet
          ? { ...props, volume: 5 }
          : { ...props, volume: 11 }
      ]
    }
    render(
      <Theme.Provider {...MyTheme}>
        <Amplifier/>
        <Amplifier id={2} quiet/>
        <Amplifier id={3} quiet volume={6}/>
      </Theme.Provider>
    )
    expect(screen.getByText(/amplifier #1/))
      .toHaveTextContent('Marshall amplifier #1 volume is 11')
    expect(screen.getByText(/amplifier #2/))
      .toHaveTextContent('Marshall amplifier #2 volume is 5')
    expect(screen.getByText(/amplifier #3/))
      .toHaveTextContent('Marshall amplifier #3 volume is 5')
  }
)
