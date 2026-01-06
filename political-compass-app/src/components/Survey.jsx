import { useState } from 'react';
import { questions } from '../data/questions';
import { getCompletionPercentage } from '../utils/scoring';
import Question from './Question';
import Progress from './Progress';

function Survey({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];
  const percentage = getCompletionPercentage(answers);

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="survey-container">
      <Progress
        current={currentIndex + 1}
        total={questions.length}
        percentage={percentage}
      />

      <Question
        question={currentQuestion}
        answer={answers[currentQuestion.id]}
        onAnswer={handleAnswer}
      />

      <div className="navigation-buttons">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </button>

        <button
          className="nav-button secondary"
          onClick={handleSkip}
        >
          Skip
        </button>
      </div>

      <p className="survey-hint">
        Answer honestly - there are no right or wrong answers
      </p>
    </div>
  );
}

export default Survey;
