import Question from "./Question"
import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const handleClickNext = () => dispatch({ type: "NEXT_QUESTION" })
  const handleRestartQuiz = () => dispatch({ type: "RESTART_QUIZ" })

  return (
    <div className="quiz">
      {quizState.showResults ? (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz</div>
            <div>
              You've got {quizState.correctAnswersCount} out of {quizState.questions.length} points
            </div>
            <button
              className="next-button"
              onClick={handleRestartQuiz}
            >
              Restart
            </button>
          </div>
        </div>
      ) : (
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