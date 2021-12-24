export const shuffleAnswers = question => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers
  ]

  return unshuffledAnswers
    .map(unshuffledAnswer => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
}

export const normalizeData = questionsData => {
  return questionsData.map(questionData => {
    const incorrectAnswers = questionData.incorrect_answers.map(
      incorrectAnswer => decodeURIComponent(incorrectAnswer)
    )
    return {
      correctAnswer: decodeURIComponent(questionData.correct_answer),
      question: decodeURIComponent(questionData.question),
      incorrectAnswers,
    }
  })
}