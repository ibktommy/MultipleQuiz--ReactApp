import React, { useContext, useState } from 'react'
import axios from 'axios'

// SETTING API ENDPOINT
const API_ENDPOINT = 'https://opentdb.com/api.php?'

// Setting a Temporary URL
const tempURL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

// Setting the Context to a Variable
const AppContext = React.createContext()

// Setting the Context_Provider
const AppProvider = ({ children }) => {
  // Setting App State
  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState(false)
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [openModal, setIsOpenModal] = useState(false)


  return <AppContext.Provider value={{
    waiting,
    loading,
    questions,
    index,
    correct, 
    error, 
    openModal,
  }}>

    { children }
    
  </AppContext.Provider>
}

// Setting Context AS A Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// Exporting AppContext and AppProvider
export { AppContext, AppProvider }