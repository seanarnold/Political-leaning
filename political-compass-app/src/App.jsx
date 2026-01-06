import { useState } from 'react';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import Results from './components/Results';
import './App.css';

function App() {
  const [stage, setStage] = useState('welcome'); // welcome, survey, results
  const [answers, setAnswers] = useState({});

  const handleStart = () => {
    setStage('survey');
  };

  const handleComplete = (surveyAnswers) => {
    setAnswers(surveyAnswers);
    setStage('results');
  };

  const handleRestart = () => {
    setAnswers({});
    setStage('welcome');
  };

  return (
    <div className="app">
      {stage === 'welcome' && <Welcome onStart={handleStart} />}
      {stage === 'survey' && <Survey onComplete={handleComplete} />}
      {stage === 'results' && <Results answers={answers} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
