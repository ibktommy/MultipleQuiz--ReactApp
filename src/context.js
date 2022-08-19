import React, { useContext } from 'react'
import axios from 'axios'

// SETTING API ENDPOINT
const API_ENDPOINT = 'https://opentdb.com/api.php?'

// Setting the Context to a Variable
const AppContext = React.createContext()

// Setting the Context_Provider
const AppProvider = ({ children }) => {
  return <AppContext.Provider value='contextValues'>
    { children }
  </AppContext.Provider>
}

// Setting Context AS A Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// Exporting AppContext and AppProvider
export { AppContext, AppProvider }