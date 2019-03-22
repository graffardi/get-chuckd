import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import logo from '../assets/chuck_norris.png'

import Button from './Button'
import { withJokes } from '../stores/JokesProvider'

const Menu = props => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    props.actions.getAndSetCategories()
  }, [])

  return (
    <div className="menu">
      <div className="menu-top">
        <Select
          className="input"
          options={props.categories}
          isClearable
          value={category}
          onChange={category => {
            setCategory(category)
            setQuery('')
          }}
        />
        <img src={logo} className="logo" alt="logo" />
        <input
          type="text"
          placeholder="Query"
          className="input"
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            setCategory('')
          }}
        />
      </div>

      <Button
        name={'GET CHUCKD'}
        customClass="get-chuckd"
        buttonClicked={() =>
          query === '' ? props.actions.getJokes(`/random?category=${category}`) : props.actions.getJokes(`/search?query=${query}`)
        }
      />
    </div>
  )
}

export default withJokes(Menu)
