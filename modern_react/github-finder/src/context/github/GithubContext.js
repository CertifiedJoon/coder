import {createContext, useReducer} from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubContextProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
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

  return <GithubContext.Provider value={{
    ...state,
    dispatch,
    setLoading,
    clearUsers
  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext