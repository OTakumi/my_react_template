import React from 'react'

export type ButtonVariants = 'text' | 'contained' | 'outline'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariants
  primary?: boolean
  disabled?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const buttonVariantClasses = (variants: ButtonVariants): string => {
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

const baseButtonClasses: string = 'px-4 py-2 font-normal'

const Button: React.FC<Props> = ({
  type = 'button',
  variant = 'contained',
  disabled,
  children = 'Button',
  ...props
}: Props) => {
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
