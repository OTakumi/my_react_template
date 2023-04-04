import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  variants?: 'text' | 'contained' | 'outline'
  primary?: boolean
  disabled?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({ type, variants, disabled, children, ...props }: Props) => {
  const classes: string[] = []
  return (
    <>
      <button
        type={type}
        className={`[
                    px-4
                    py-2
                    border
                    border-black
                    border-solid
                    bg-blue-400
                    ].join(' ')`}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button
