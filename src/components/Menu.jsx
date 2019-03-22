import React, { useState } from 'react'
import Select from 'react-select'

import logo from '../assets/chuck_norris.png'
import Button from './Button'

const Menu = props => {
  const [query, setQuery] = useState('')

  return (
    <div className="menu">
      <div className="menu-top">
        <Select className="input" isClearable />
        <img src={logo} className="logo" alt="logo" />
        <input type="text" placeholder="Query" className="input" value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <Button name={'GET CHUCKD'} customClass="get-chuckd" buttonClicked={() => console.log('clicked')} />
    </div>
  )
}

export default Menu
