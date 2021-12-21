import Question from "./Question"

const Quiz = () => {
  return (
    <div className="quiz">
      <div>
        <div className="score">Quiz</div>
        <Question />
        <button className="next-button">Next Question</button>
      </div>
    </div>
  );
};

export default Quiz