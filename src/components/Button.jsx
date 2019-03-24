import React from 'react'
import classNames from 'classnames'

const Button = props => (
  <button className={classNames('button', { [`${props.customClass}`]: props.customClass })} onClick={props.buttonClicked}>
    {props.name}
  </button>
)

export default Button
