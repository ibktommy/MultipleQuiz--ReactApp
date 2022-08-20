import React from 'react'
import { useGlobalContext } from '../context'

const QuizForm = () => {
  // Destructuring State Values from the Context Provider
  const { error, quizForm, inputChangeHandler, formSubmitHandler } = useGlobalContext()

  return (
    <h2>Quiz Form</h2>
  )
}

export default QuizForm