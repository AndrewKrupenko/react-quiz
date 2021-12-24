import { createContext, useReducer } from "react"
import {normalizeData, shuffleAnswers} from "../helpers"

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  showResults: false,
  answers: [],
  currentAnswer: '',
  correctAnswersCount: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      }
    }
    case "NEXT_QUESTION": {
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
        currentAnswer: "", // there is no answer yet, only opened next question
      }
    }
    case "RESTART_QUIZ": {
      return initialState
    }
    case "LOADED_QUESTIONS": {
      const normalizedData = normalizeData(action.payload)
      return {
        ...state,
        questions: normalizedData,
        answers: shuffleAnswers(normalizedData[0]),
      }
    }
    default: {
      return state
    }
  }
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