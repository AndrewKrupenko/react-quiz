const Answer = ({
  index,
  answer,
  correctAnswer,
  currentAnswer,
  onSelectAnswer
}) => {
  const letterMapping = ["A", "B", "C", "D"]
  // If we already have answered and answer is equal to correct value
  const isCorrectAnswer = currentAnswer && answer === correctAnswer
  const isWrongAnswer = currentAnswer === answer && currentAnswer !== correctAnswer
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : ""
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : ""
  // disable options after we got answer
  const disabledClass = currentAnswer ? "disabled-answer" : ""

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answer)}
    >
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">{ answer }</div>
    </div>
  )
}

export default Answer