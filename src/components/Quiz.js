import Question from "./Question"
import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const handleClickNext = () => dispatch({ type: "NEXT_QUESTION" })

  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/10</div>
        <Question />
        <button
          className="next-button"
          onClick={handleClickNext}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default Quiz