import React from 'react'
import classNames from 'classnames'

const Button = props => {
  const btn = props.disabled ? (
    <button disabled className={classNames('button', { [`${props.customClass}`]: props.customClass })} onClick={props.buttonClicked}>
      {props.name}
    </button>
  ) : (
    <button className={classNames('button', { [`${props.customClass}`]: props.customClass })} onClick={props.buttonClicked}>
      {props.name}
    </button>
  )

  return btn
}

export default Button
