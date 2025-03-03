import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemedAlert, ThemedButton, ThemedButton2, VariantButton, ThemeProvider, ThemeConfig } from '../lib/UI/index'
import { buttonVariants } from '../lib/UI/ButtonVariants'
import { fail } from '@abw/badger-utils'
import { Themeable } from '@/lib/types'

it(
  'default button and alert',
  () => {
    const { container } = render(
      <ThemeProvider Alert={{ type: 'info' }}>
        <ThemedButton text="Hello World"/>
        <ThemedAlert title="Alert" text="Groovy"/>
      </ThemeProvider>
    )
    const button = container.querySelector('button') || fail('No button')
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
      <ThemeProvider
        Alert={{ type: 'info' }}
        Button={{ color: 'red' }} //, bad: 'one' }}  // bad is not valid
        // Button2={{ color: 'blue' }}  // Button2 is not accepted
        // Checkbox={{ text: 'Check Me', checked: 'yes' }}
      >
        <ThemedButton text="Hello World" data-testid="button1"/>
        <ThemedButton2 text="Goodbye World" data-testid="button2"/>
        <ThemedAlert title="Alert" text="Groovy"/>
      </ThemeProvider>
    )
    // const button = container.querySelector('button')
    const button1 = screen.getByTestId('button1')
    expect(button1).toHaveClass('red')
    expect(button1).toHaveTextContent('Hello World')
    const button2 = screen.getByTestId('button2')
    expect(button2).toHaveClass('red')
    expect(button2).toHaveTextContent('Goodbye World')
    const alert = container.querySelector('div.alert')
    expect(alert).toHaveClass('alert')
    expect(alert).toHaveClass('info')
    expect(alert).toHaveTextContent('Groovy')
  }
)

it(
  'spread theme options',
  () => {
    const themeOptions: Themeable<ThemeConfig> = {
      // Select: { bad: 'key' },
      Alert: { type: 'info' }, // fart: 'loudly' },
      Button: { color: 'red' },
    }
    const { container } = render(
      <ThemeProvider {...themeOptions}>
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
          props => ({ ...props, type: 'error' })
        }
      >
        <VariantButton
          text="Add Something"
          action="add"
          onClick={() => console.log(`clicked`) }
          data-testid="Yar"
          // @ts-expect-error invalid not a valid attribute
          invalid="parp"
        />
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
