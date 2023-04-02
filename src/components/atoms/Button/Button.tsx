import React from 'react'

export interface Props {}

const Button: React.FC<Props> = (props) => {
    return <button className="button">Hello World!</button>
}

export default Button
