import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  children?: React.ReactNode
}

const baseLabelClasses = 'mr-2'
const baseTextFieldClasses = 'p-2 font-normal border rounded'

export const TextField: React.FC<Props> = ({
  label = '',
  children,
  placeholder = '',
  ...props
}) => {
  return (
    <div className="">
      <label htmlFor={label} className={`${baseLabelClasses}`}>
        {children}
      </label>
      <input
        id={label}
        type="text"
        className={`${baseTextFieldClasses}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default TextField
