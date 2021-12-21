import Question from "./Question"
import { useReducer } from "react"

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }
  }
  return state
}

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/10</div>
        <Question />
        <button
          className="next-button"
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
        >
          Next Question
        </button>
      </div>
    </div>
  )
}

export default Quiz