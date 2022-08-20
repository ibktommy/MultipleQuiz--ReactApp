import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

// SETTING API ENDPOINT
const API_ENDPOINT = 'https://opentdb.com/api.php?'
// Setting Object that contain number value used in the API url-parameter
const categoryParams = {
  sports: 21,
  history: 23,
  politics: 24,
}

// Setting a Temporary URL
// const tempURL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

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
  const [quizForm, setQuizForm] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy'
  })

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

  // Function to handle Form Submit
  function formSubmitHandler(e) {
    e.preventDefault()

    // Get url options by destructuring the quizForm Object
    const { amount, category, difficulty } = quizForm

    // const tempURL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'

    const url = `${API_ENDPOINT}amount=${amount}&category=${categoryParams[category]}&difficulty=${difficulty}&type=multiple`

    // Fetch Data Form Dynamic url when form-button is clicked
    fetchData(url)
  }

  // Function to handle Form-Input Change
  function inputChangeHandler(e) {
    const name = e.target.name
    const value = e.target.value

    setQuizForm({...quizForm, [name]: value})
  }

  // Using useEffect to fetch the Data after component re-renders
  // useEffect(() => {
  //   fetchData(tempURL)
  // }, [])


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
    quizForm,
    formSubmitHandler,
    inputChangeHandler,
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