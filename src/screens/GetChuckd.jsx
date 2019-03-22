import React, { Component } from 'react'

import Menu from '../components/Menu'
import CategoriesProvider from '../stores/JokesProvider'

class GetChuckd extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
          <CategoriesProvider>
            <Menu />
          </CategoriesProvider>
        </div>
      </div>
    )
  }
}

export default GetChuckd
