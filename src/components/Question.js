import Answer from "./Answer"
import { useContext } from "react"
import { QuizContext } from "../contexts/quiz"

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  return (
    <div>
      <div className="question">
        {currentQuestion.question}
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => (
          <Answer
            key={answer}
            index={index}
            answer={answer}
            correctAnswer={currentQuestion.correctAnswer}
            currentAnswer={quizState.currentAnswer}
            onSelectAnswer={answer =>
              dispatch({ type: "SELECT_ANSWER", payload: answer })
            }
          />
        ))}
      </div>
    </div>
  )
}

export default Question