import { createContext, useReducer } from "react"
import questions from "../data"
import { shuffleAnswers } from "../helpers"

const initialState = {
  questions: questions,
  currentQuestionIndex: 0,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    const showResults = state.currentQuestionIndex === state.questions.length - 1
    const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1
    const answers = showResults
      ? []
      : shuffleAnswers(state.questions[currentQuestionIndex]) // Found a question object and got answers from it

    return {
      ...state,
      currentQuestionIndex,
      showResults,
      answers,
    }
  } else if (action.type === 'RESTART_QUIZ') {
    return initialState
  }

  return state
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState) // value = [state, dispatch]
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}