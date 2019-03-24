import React, { createContext, useState } from 'react'
import axios from 'axios'

const JokesContext = createContext({})

axios.defaults.baseURL = 'https://api.chucknorris.io/jokes/'

const JokesProvider = props => {
  const [categories, setCategories] = useState([])
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)

  const addJokes = newJokes => {
    setJokes([...newJokes, ...jokes])
  }

  const getJokes = endpoint => {
    const queriedJokes = axios.get(endpoint)

    setLoading(true)

    queriedJokes
      .then(res => {
        if (res.data.total === 0) {
          addJokes([
            {
              value: 'Chuck already knew that word, so he decided not to answer.',
              category: null
            }
          ])
        } else {
          res.data.total
            ? addJokes(res.data.result)
            : addJokes([
                {
                  value: res.data.value,
                  category: res.data.category
                }
              ])
        }
        setLoading(false)
      })
      .catch(err => {
        setJokes([
          {
            value: 'Something went wrong, but definitely not Chuck Norris.',
            category: null
          }
        ])
        console.error(err)
        setLoading(false)
      })
  }

  const getAndSetCategories = () => {
    const queriedCategories = axios.get('categories')

    queriedCategories
      .then(res => {
        setCategories(
          res.data.map(cat => ({
            value: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1)
          }))
        )
      })
      .catch(err => console.error(err))
  }

  return (
    <JokesContext.Provider
      value={{
        jokes,
        categories,
        loading,
        actions: {
          getJokes,
          getAndSetCategories
        }
      }}
    >
      {props.children}
    </JokesContext.Provider>
  )
}

export const withJokes = Component => props => <JokesContext.Consumer>{store => <Component {...props} {...store} />}</JokesContext.Consumer>

export default JokesProvider
