import React from 'react'
import { shallow } from 'enzyme'

import Menu from '../components/Menu'

global.console.log = jest.fn()

it('Menu renders properly.', () => {
  const getAndSetCategories = () => console.log('getAndSetCategories')
  const categories = [
    {
      value: 'test',
      label: 'Test'
    },
    {
      value: 'test',
      label: 'Test'
    },
    {
      value: 'test',
      label: 'Test'
    }
  ]

  const wrapper = shallow(<Menu categories={categories} getAndSetCategories={getAndSetCategories} />)

  expect(wrapper.exists()).toBe(true)
})
