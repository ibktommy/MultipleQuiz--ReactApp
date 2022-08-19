import React from 'react'
import { useGlobalContext } from './context';
import QuizForm from './components/QuizForm'
import Loading from './components/Loading';
import Modal from './components/Modal';

function App() {
  // Getting States Needed from useGloablContext
  const { waiting, loading, questions, index, correct } = useGlobalContext()

    if (waiting ) {
      return <QuizForm />
    }

    if (loading) {
      return <Loading />
    }

  console.log(questions)

  // Destructuring Objects from the questions array
  const { question, incorrect_answers, correct_answer } = questions[0]
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
        </section>
      </main>
    )

}

export default App;
