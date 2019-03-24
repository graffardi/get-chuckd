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

  const handleSubmit = e => {
    e.preventDefault()

    if (!props.loading) {
      query === ''
        ? props.actions.getJokes(`/random?category=${category.value ? category.value : ''}`)
        : props.actions.getJokes(`/search?query=${query}`)
    }
  }

  return (
    <div className="menu">
      <form onSubmit={handleSubmit}>
        <div className="menu-top">
          <Select
            className="input-select"
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
          name={props.loading ? 'Loading facts...' : 'GET CHUCKD'}
          customClass={props.loading ? 'get-chuckd loading' : 'get-chuckd'}
        />
      </form>
    </div>
  )
}

export default withJokes(Menu)
