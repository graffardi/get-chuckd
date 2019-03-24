import React from 'react'
import { shallow } from 'enzyme'

import Button from '../components/Button'

global.console.log = jest.fn()

it('Button component renders and triggers callback properly.', () => {
  const wrapper = shallow(<Button name={'Test'} buttonClicked={() => console.log('Clicked!')} />)

  wrapper.find('button').simulate('click')

  expect(global.console.log).toHaveBeenCalledWith('Clicked!')
})
