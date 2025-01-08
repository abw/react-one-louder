import { variants } from '../../../lib/Variants'
import { ButtonProps } from './Button'

export type ButtonVariantProps = ButtonProps & {
  action?: string,
}

export const buttonVariants = variants({
  action: {
    add: {
      color: 'green'
    },
    delete: {
      color: 'red'
    }
  }
})

