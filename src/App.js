import React from 'react'
import { useGlobalContext } from './context';
import QuizForm from './components/QuizForm'

function App() {
  // Getting States Needed from useGloablContext
  const { waiting, loading, questions, index, correct } = useGlobalContext()

    if (waiting ) {
      return <QuizForm />
    }

    if (loading) {
      return <loading />
    }

    return (
      <main>
        Quiz Ap
      </main>
    )

}

export default App;
