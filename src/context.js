import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

// SETTING API ENDPOINT
const API_ENDPOINT = 'https://opentdb.com/api.php?'

// Setting a Temporary URL
const tempURL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

// Setting the url
// const url = ""

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
  const [openModal, setOpenModal] = useState(false)

  // Fteching Data Funtion 
  const fetchData = async (url) => {
    setLoading(true)
    setWaiting(false)

    const response = await axios(url).catch((error) => {
      console.log(error.message)
    })
    console.log(response)

    // Setting Conditions to monitor the response from the API
    if (response) {
      const data = response.data.results

      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setWaiting(false)
        setError(false)
      } else {
        setWaiting(true)
        setError(true)
      }
    } else {
      setWaiting(true)
    }
  }

  // Function To Increase Index Value
  function increaseIndexHandler() {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1

      if (newIndex > questions.length - 1) {
        openModalHandler()
        return 0
      } else {
        return newIndex
      }
    })
  }

  // Function To Check if the answer clicked is the correct answer
  function checkAnswer(value) {
    if (value) {
      setCorrect((prev) => {
        const next = prev + 1
        return next
      })
    }
    increaseIndexHandler()
  }

  // Function To Open Modal
  function openModalHandler() {
    setOpenModal(true)
  }
  // Function To Close Modal
  function closeModalHandler() {
    setWaiting(true)
    setCorrect(0)
    setOpenModal(false)
  }

  // Using useEffect to fetch the Data after component re-renders
  useEffect(() => {
    fetchData(tempURL)
  }, [])


  return <AppContext.Provider value={{
    waiting,
    loading,
    questions,
    index,
    correct, 
    error, 
    openModal,
    increaseIndexHandler,
    checkAnswer,
    closeModalHandler,
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