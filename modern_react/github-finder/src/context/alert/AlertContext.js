import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertContextProvider = ({children}) => {
  const initialState = null
  const [state, dispatch] = useReducer(alertReducer, initialState)

  const showAlert = (msg, type) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: {msg, type}
    })

    setTimeout(() => dispatch({type: 'CLEAR_ALERT'}), 3000)
  }

  return <AlertContext.Provider value={{
    alert: state,
    showAlert
  }}>
    {children}
  </AlertContext.Provider>
}

export default AlertContext