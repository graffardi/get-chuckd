import React, { useState } from 'react'
import { withJokes } from '../stores/JokesProvider'

const Content = props => {
  const [index, setIndex] = useState(0)

  const content = props.jokes.map((joke, i) => <div key={`joke-${i}`}>{joke.value}</div>)
  return <div className="content">{content}</div>
}

export default withJokes(Content)
