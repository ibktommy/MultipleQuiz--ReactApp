import React from 'react'
import { useGlobalContext } from './context';
import QuizForm from './components/QuizForm'
import Loading from './components/Loading';
import Modal from './components/Modal';

function App() {
  // Getting States Needed from useGloablContext
  const { waiting, loading, questions, index, correct, increaseIndexHandler } = useGlobalContext()

    if (waiting ) {
      return <QuizForm />
    }

    if (loading) {
      return <Loading />
    }

  // Destructuring Objects from the questions array
  const { question, incorrect_answers, correct_answer } = questions[index]
  const answers = [...incorrect_answers, correct_answer]

    return (
      <main>
        {/* <Modal /> */}
        <section className="quiz">
          <p className="correct-answers">
            correct_answers: {correct}/{index}
          </p>
          <article className='container'>
            <h2 dangerouslySetInnerHTML={{__html: question}}/>
            <div className="btn-container">
              {answers.map((answer, index) => {
                return (
                  <button key={index} className="answer-btn" dangerouslySetInnerHTML={{__html: answer}} />
                )
              })}
            </div>
          </article>
          <button onClick={increaseIndexHandler} className="next-question">Next Question</button>
        </section>
      </main>
    )

}

export default App;
