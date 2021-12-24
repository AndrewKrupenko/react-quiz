import Question from "./Question"
import { useContext, useEffect } from "react"
import { QuizContext } from "../contexts/quiz"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const handleClickNext = () => dispatch({ type: "NEXT_QUESTION" })
  const handleRestartQuiz = () => dispatch({ type: "RESTART_QUIZ" })

  const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986'

  useEffect(() => {
    if (quizState.questions.length) {
      return
    }

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'LOADED_QUESTIONS', payload: data.results })
      })
  })

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz</div>
            <div>
              You've got {quizState.correctAnswersCount} out of {quizState.questions.length} points
            </div>
          </div>
          <button
            className="next-button"
            onClick={handleRestartQuiz}
          >
            Restart
          </button>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
          </div>
          <Question />
          <button
            className="next-button"
            onClick={handleClickNext}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz