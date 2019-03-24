import React from 'react'
import { shallow } from 'enzyme'

import Content from '../components/Content'

it('Content renders properly.', () => {
  const jokes = [
    {
      category: 'Test',
      value: "This joke ain't a joke"
    },
    {
      category: 'Test',
      value: "This joke ain't a joke"
    },
    {
      category: 'Test',
      value: "This joke ain't a joke"
    },
    {
      category: 'Test',
      value: "This joke ain't a joke"
    },
    {
      category: 'Test',
      value: "This joke ain't a joke"
    }
  ]

  const wrapper = shallow(<Content jokes={jokes} />)

  expect(wrapper.exists()).toBe(true)
})
