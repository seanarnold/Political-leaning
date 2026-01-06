import { answerOptions } from '../data/questions';

function Question({ question, answer, onAnswer }) {
  return (
    <div className="question-card">
      <h2 className="question-text">{question.text}</h2>

      <div className="answer-options">
        {answerOptions.map((option) => (
          <button
            key={option.value}
            className={`answer-button ${answer === option.value ? 'selected' : ''}`}
            onClick={() => onAnswer(question.id, option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
