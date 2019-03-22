import React, { createContext, useState } from 'react'

const CategoriesContext = createContext({})

const CategoriesProvider = props => {
  const [categories, setCategories] = useState([])

  const getCategories = () => {
    setCategories(['toto', 'titi'])
  }

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        actions: {
          getCategories
        }
      }}
    >
      {props.children}
    </CategoriesContext.Provider>
  )
}

export const withCategories = Component => props => (
  <CategoriesContext.Consumer>{store => <Component {...props} {...store} />}</CategoriesContext.Consumer>
)

export default CategoriesProvider
