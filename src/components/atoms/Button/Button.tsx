import { warn } from 'console'
import React from 'react'

export type ButtonVariants = 'text' | 'contained' | 'outline' | undefined

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants
  primary?: boolean
  disabled?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const buttonVariantClasses = (variants: ButtonVariants) => {
    switch (variants) {
        case 'text': {
            return 'border-0 bg-transparent text-sky-400'
        }
        case 'contained': {
            return 'rounded bg-sky-400 text-white'
        }
        case 'outline': {
            return 'border border-sky-400 rounded bg-transparent text-sky-400'
        }
    }
}

const baseButtonClasses = 'px-4 py-2 font-medium'

const Button: React.FC<Props> = ({ type, variant, disabled, children, ...props }: Props) => {

  return (
    <>
      <button
        type={type}
        className={`${baseButtonClasses} ${buttonVariantClasses(variant)}`}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button
