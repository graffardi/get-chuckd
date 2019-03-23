import React, { useState } from 'react'
import { withJokes } from '../stores/JokesProvider'
import Button from './Button'

const Content = props => {
  const [index, setIndex] = useState(0)

  const content = props.jokes.map((joke, i) => <div key={`joke-${i}`}>{joke.value}</div>)
  return (
    <div className="content">
      {content}
      <div className="content-controls">
        {index !== 0 && <Button name={'Previous'} buttonClicked={() => setIndex(index - 1)} />}
        {index < props.jokes.length && <Button name={'Next'} buttonClicked={() => setIndex(index + 1)} />}
      </div>
    </div>
  )
}

export default withJokes(Content)
