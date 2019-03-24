import React, { useState } from 'react'

import { withJokes } from '../stores/JokesProvider'
import Button from './Button'

const Content = props => {
  const [index, setIndex] = useState(props.jokes.length)

  const content = props.jokes.map((joke, i) => (
    <>
      <div key={`joke-${i}`}>
        {joke.category && <h2 className="joke-category">{joke.category}</h2>}
        <p className="joke-content">{joke.value}</p>
      </div>
    </>
  ))

  return (
    <div className="joke-slider">
      {content[index]}
      <div>
        {index !== 0 && <Button name={'Previous'} buttonClicked={() => setIndex(index - 1)} />}
        {index !== props.jokes.length - 1 && props.jokes.length !== 0 && <Button name={'Next'} buttonClicked={() => setIndex(index + 1)} />}
      </div>
    </div>
  )
}

export default withJokes(Content)
