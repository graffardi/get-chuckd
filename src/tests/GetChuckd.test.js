import React from 'react'
import ReactDOM from 'react-dom'

import GetChuckd from '../screens/GetChuckd'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(<GetChuckd />, div)
  ReactDOM.unmountComponentAtNode(div)
})
