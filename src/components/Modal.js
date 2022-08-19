import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  // Getting States from the Context Provider
  const { openModal, closeModalHandler, correct, questions } = useGlobalContext()

  return (
    <div className={`${openModal ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h2>Congratulations</h2>
        <p>
          You answered {correct} question(s) out of {questions.length - 1}
        </p>
        <button onClick={closeModalHandler} className="close-btn">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal