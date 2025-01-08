import React from 'react'
import { it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ThemedAlert, ThemedButton, VariantButton, ThemeProvider, ThemeConfig } from '../lib/UI/index'
import { buttonVariants } from '../lib/UI/ButtonVariants'

it(
  'default button and alert',
  () => {
    const { container } = render(
      <ThemeProvider Alert={{ type: 'info' }}>
        <ThemedButton text="Hello World"/>
        <ThemedAlert title="Alert" text="Groovy"/>
      </ThemeProvider>
    )
    const button = container.querySelector('button')
    expect(button).toHaveTextContent('Hello World')
    const alert = container.querySelector('div.alert')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveTextContent('Groovy')
  }
)

it(
  'themed button and alert',
  () => {
    const { container } = render(
      <ThemeProvider Alert={{ type: 'info' }} Button={{ color: 'red' }}>
        <ThemedButton text="Hello World"/>
        <ThemedAlert title="Alert" text="Groovy"/>
      </ThemeProvider>
    )
    const button = container.querySelector('button')
    expect(button).toHaveClass('red')
    expect(button).toHaveTextContent('Hello World')
    const alert = container.querySelector('div.alert')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('info')
    expect(alert).toHaveTextContent('Groovy')
  }
)

it(
  'spread theme options',
  () => {
    const themeOptions: ThemeConfig = {
      Alert: { type: 'info' },
      Button: { color: 'red' }
    }
    const { container } = render(
      <ThemeProvider {...themeOptions as ThemeConfig}>
        <ThemedButton text="Hello World"/>
        <ThemedAlert title="Alert" text="Groovy"/>
      </ThemeProvider>
    )
    const button = container.querySelector('button')
    expect(button).toHaveClass('red')
    expect(button).toHaveTextContent('Hello World')
    const alert = container.querySelector('div.alert')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('info')
    expect(alert).toHaveTextContent('Groovy')
  }
)

it(
  'button variants',
  () => {
    const { container } = render(
      <ThemeProvider
        Button={buttonVariants}
        Alert={
          (props: object) => ({ ...props, type: 'error' })
        }
      >
        <VariantButton text="Add Something" action="add"/>
        <VariantButton text="Delete Something" action="delete"/>
      </ThemeProvider>
    )
    const buttons = container.querySelectorAll('button')
    expect(buttons[0]).toHaveClass('green')
    expect(buttons[0]).toHaveTextContent('Add Something')
    expect(buttons[1]).toHaveClass('red')
    expect(buttons[1]).toHaveTextContent('Delete Something')
  }
)
