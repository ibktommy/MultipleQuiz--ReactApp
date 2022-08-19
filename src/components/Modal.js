import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  // Getting States from the Context Provider
  const { openModal, closeModalHandler, correct, questions } = useGlobalContext()

  // Calculating Correct Answers in Percentage
  const answerPercentage = `${((correct / questions.length) * 100).toFixed(0)}%`

  return (
    <div className={`${openModal ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h2>Congratulations</h2>
        <p>
          You answered {answerPercentage} of questions correctly
        </p>
        <button onClick={closeModalHandler} className="close-btn">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal