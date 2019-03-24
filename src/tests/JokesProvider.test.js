import React from 'react'
import { shallow } from 'enzyme'

import JokesProvider from '../stores/JokesProvider'

global.console.log = jest.fn()

it('Jokes are provided.', () => {
  const wrapper = shallow(<JokesProvider />)

  expect(wrapper.exists()).toBe(true)
})
