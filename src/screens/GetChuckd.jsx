import React, { Component } from 'react'

import Menu from '../components/Menu'
import CategoriesProvider from '../stores/JokesProvider'
import Content from '../components/Content'

class GetChuckd extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <CategoriesProvider>
            <Menu />
            <Content />
          </CategoriesProvider>
        </div>
      </div>
    )
  }
}

export default GetChuckd
