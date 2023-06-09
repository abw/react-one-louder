import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Amplifier from '../lib/Amplifier.jsx'
import Marshall from '../lib/Marshall.jsx'
import { Theme } from '../../lib/index.jsx'

describe(
  'App',
  () => {
    it(
      'default volume',
      () => {
        render(<Amplifier/>)
        expect(screen.getByText(/Amplifier/))
          .toHaveTextContent('Amplifier #1 volume is 10')
      }
    )
    it(
      'custom volume',
      () => {
        render(<Amplifier volume={9}/>)
        expect(screen.getByText(/Amplifier/))
          .toHaveTextContent('Amplifier #1 volume is 9')
      }
    )
    it(
      'themed volume',
      () => {
        render(
          <Theme.Provider Amplifier={{ volume: 11 }}>
            <Amplifier/>
          </Theme.Provider>
        )
        expect(screen.getByText(/Amplifier/))
          .toHaveTextContent('Amplifier #1 volume is 11')
      }
    )
    it(
      'themed volume',
      () => {
        render(
          <Theme.Provider Amplifier={{ volume: 11 }}>
            <Amplifier volume="9"/>
          </Theme.Provider>
        )
        expect(screen.getByText(/Amplifier/))
          .toHaveTextContent('Amplifier #1 volume is 9')
      }
    )
    it(
      'theming function',
      () => {
        const MyTheme = {
          Amplifier: props => props.quiet
            ? { volume: 5 }
            : { volume: 11 }
        }
        render(
          <Theme.Provider {...MyTheme}>
            <Amplifier/>
            <Amplifier id={2} quiet/>
            <Amplifier id={3} quiet volume={6}/>
          </Theme.Provider>
        )
        expect(screen.getByText(/Amplifier #1/))
          .toHaveTextContent('Amplifier #1 volume is 11')
        expect(screen.getByText(/Amplifier #2/))
          .toHaveTextContent('Amplifier #2 volume is 5')
        expect(screen.getByText(/Amplifier #3/))
          .toHaveTextContent('Amplifier #3 volume is 5')
      }
    )
    it(
      'theming defaults',
      () => {
        const MyTheme = {
          Amplifier: props => props.quiet
            ? { volume: props.volume ?? 5 }
            : { volume: props.volume ?? 11 }
        }
        render(
          <Theme.Provider {...MyTheme}>
            <Amplifier/>
            <Amplifier id={2} quiet/>
            <Amplifier id={3} quiet volume={6}/>
          </Theme.Provider>
        )
        expect(screen.getByText(/Amplifier #1/))
          .toHaveTextContent('Amplifier #1 volume is 11')
        expect(screen.getByText(/Amplifier #2/))
          .toHaveTextContent('Amplifier #2 volume is 5')
        expect(screen.getByText(/Amplifier #3/))
          .toHaveTextContent('Amplifier #3 volume is 6')
      }
    )
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
              ? { volume: 5 }
              : { volume: 11 }
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

  }
)