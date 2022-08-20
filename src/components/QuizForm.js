import React from 'react'
import { useGlobalContext } from '../context'

const QuizForm = () => {
  // Destructuring State Values from the Context Provider
  const { error, quizForm, inputChangeHandler, formSubmitHandler } = useGlobalContext()

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Quiz Form</h2>
          {/* Amount */}
          <div className="form-control">
            <label htmlFor="amount">
              Number of Questions
            </label>
            <input className='form-input' type="number" name='amount' id="amount" min={1} max={50} value={quizForm.amount} onChange={inputChangeHandler} />
          </div>

          {/* CATEGORY */}
          <div className="form-control">
            <label htmlFor="category">
              Category
            </label>
            <select className='form-input' name="category" id="category" value={quizForm.category} onChange={inputChangeHandler}>
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>

          {/* DIFFICULTY */}
          <div className="form-control">
            <label htmlFor="difficulty">
              difficulty
            </label>
            <select className='form-input' name="difficulty" id="difficulty" value={quizForm.difficulty} onChange={inputChangeHandler}>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {/* BUTTON */}
          <button className='submit-btn' type='submit' onClick={formSubmitHandler}>
            Click To Start Quiz
          </button>
        </form>
      </section>
    </main >
  )
}

export default QuizForm