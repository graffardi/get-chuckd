import React, { useState } from 'react'

import { withJokes } from '../stores/JokesProvider'
import Button from './Button'

const Content = props => {
  const [index, setIndex] = useState(0)

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
      <div>
        {index !== 0 && <Button name={'Previous'} buttonClicked={() => setIndex(index - 1)} />}
        {index !== props.jokes.length - 1 && props.jokes.length !== 0 && <Button name={'Next'} buttonClicked={() => setIndex(index + 1)} />}
      </div>
    </div>
  )
}

export default withJokes(Content)
