import React from 'react'
import { useGlobalContext } from './context';
import QuizForm from './components/QuizForm'
import Loading from './components/Loading';

function App() {
  // Getting States Needed from useGloablContext
  const { waiting, loading, questions, index, correct } = useGlobalContext()

    if (waiting ) {
      return <QuizForm />
    }

    if (loading) {
      return <Loading />
    }

    return (
      <main>
        Quiz Ap
      </main>
    )

}

export default App;
