import { calculateScores, getQuadrant, getDetailedAnalysis } from '../utils/scoring';
import Compass from './Compass';

function Results({ answers, onRestart }) {
  const scores = calculateScores(answers);
  const quadrant = getQuadrant(scores.economic, scores.social);
  const analysis = getDetailedAnalysis(scores.economic, scores.social);

  return (
    <div className="results-container">
      <h1 className="results-title">Your Political Compass</h1>

      <div className="results-summary">
        <h2 style={{ color: quadrant.color }}>{quadrant.name}</h2>
        <p className="quadrant-description">{quadrant.description}</p>
      </div>

      <Compass economic={scores.economic} social={scores.social} />

      <div className="detailed-analysis">
        <h3>Detailed Analysis</h3>

        <div className="analysis-section">
          <h4>Economic Axis ({scores.economic > 0 ? 'Right' : 'Left'})</h4>
          <p className="analysis-label">{analysis.economicLabel}</p>
          <p>{analysis.economicText}</p>
        </div>

        <div className="analysis-section">
          <h4>Social Axis ({scores.social > 0 ? 'Authoritarian' : 'Libertarian'})</h4>
          <p className="analysis-label">{analysis.socialLabel}</p>
          <p>{analysis.socialText}</p>
        </div>

        <div className="analysis-summary">
          <p><strong>Summary:</strong> {analysis.summary}</p>
        </div>
      </div>

      <div className="results-actions">
        <button className="action-button" onClick={onRestart}>
          Retake Survey
        </button>
        <button
          className="action-button secondary"
          onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
            alert('Link copied! Share with others.');
          }}
        >
          Share Results
        </button>
      </div>

      <div className="disclaimer">
        <p>
          <strong>Note:</strong> This political compass is a simplified model for educational purposes.
          Political beliefs are complex and nuanced, and cannot be fully captured by a two-dimensional graph.
          This assessment should not be considered a definitive classification of your political ideology.
        </p>
      </div>
    </div>
  );
}

export default Results;
