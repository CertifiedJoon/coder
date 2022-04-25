import {createContext, useReducer} from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubContextProvider = ({children}) => {
  const initialState = {
    users: [],
    isLoading: false
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const setLoading = () => {
    dispatch({
      type:'SET_LOADING'
    })
  }

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS'
    })
  }

  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
      header : {
        Authorization : `token ${process.env.REACT_APP_GITHUB_URL}`
      }
    })

    const { items } = await res.json()

    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  return <GithubContext.Provider value={{
    users: state.users,
    isLoading: state.isLoading,
    searchUsers,
    clearUsers
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext