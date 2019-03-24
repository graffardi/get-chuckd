import React, { useState } from 'react'

import { withJokes } from '../stores/JokesProvider'
import Button from './Button'

const Content = props => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex(index - 1)
  }

  const handleNext = () => {
    setIndex(index + 1)
  }

  if (index > props.jokes.length) {
    setIndex(0)
  }

  return (
    <div className="joke-slider">
      {props.jokes.length !== 0 && (
        <>
          {props.jokes[index].category && <h1 className="joke-category">{props.jokes[index].category}</h1>}
          <p className="joke-content">{props.jokes[index].value}</p>
        </>
      )}
      <div className="slider-controls">
        {index !== 0 ? (
          <Button name="Previous" buttonClicked={handlePrev} />
        ) : (
          <Button name="Previous" customClass="button-disabled" disabled />
        )}
        {index !== props.jokes.length - 1 && props.jokes.length !== 0 ? (
          <Button name="Next" customClass="right-button" buttonClicked={handleNext} />
        ) : (
          <Button name="Next" customClass="right-button button-disabled" disabled />
        )}
      </div>
    </div>
  )
}

export default withJokes(Content)
