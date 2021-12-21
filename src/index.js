import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { QuizProvider } from "./contexts/quiz"
import Quiz from "./components/Quiz"

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
)