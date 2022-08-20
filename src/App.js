import React from 'react'
import { useGlobalContext } from './context';
import QuizForm from './components/QuizForm'
import Loading from './components/Loading';
import Modal from './components/Modal';

function App() {
  // Getting States Needed from useGloablContext
  const { waiting, loading, questions, index, correct, increaseIndexHandler, checkAnswer } = useGlobalContext()

    if (waiting ) {
      return <QuizForm />
    }

    if (loading) {
      return <Loading />
    }

  // Destructuring Objects from the questions array
  const { question, incorrect_answers, correct_answer } = questions[index]
  let answers = [...incorrect_answers]
  // Randomizing the position of the correct_answer
  const randomIndex = Math.floor(Math.random() * 4)
  if (randomIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[randomIndex])
    answers[randomIndex] = correct_answer
  }

    return (
      <main>
        <Modal />
        <section className="quiz">
          <p className="correct-answers">
            correct_answers: {correct}/{index}
          </p>
          <article className='container'>
            <h2 dangerouslySetInnerHTML={{__html: question}}/>
            <div className="btn-container">
              {answers.map((answer, index) => {
                return (
                  <button onClick={() => checkAnswer(correct_answer === answer)} key={index} className="answer-btn" dangerouslySetInnerHTML={{ __html: answer }} />
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
