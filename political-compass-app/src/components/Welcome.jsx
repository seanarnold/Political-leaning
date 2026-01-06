function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Political Compass Survey</h1>

      <div className="welcome-content">
        <p className="welcome-intro">
          Discover where you stand on the political spectrum with this comprehensive survey.
        </p>

        <div className="info-box">
          <h2>What is the Political Compass?</h2>
          <p>
            The political compass maps political ideology across two axes:
          </p>
          <ul>
            <li>
              <strong>Economic Axis (Left-Right):</strong> From state-controlled economy (left)
              to free-market capitalism (right)
            </li>
            <li>
              <strong>Social Axis (Authoritarian-Libertarian):</strong> From strong centralized
              authority (authoritarian) to maximum personal freedom (libertarian)
            </li>
          </ul>
        </div>

        <div className="info-box">
          <h2>How It Works</h2>
          <p>
            You'll be presented with {36} statements. Rate each one from "Strongly Disagree"
            to "Strongly Agree" based on your personal views.
          </p>
          <p>
            Answer honestly and instinctively - there are no right or wrong answers.
            Your responses will be analyzed to determine your position on the political compass.
          </p>
        </div>

        <div className="info-box">
          <h2>Privacy</h2>
          <p>
            This survey is completely anonymous. No data is collected or stored.
            All calculations happen in your browser.
          </p>
        </div>

        <button className="start-button" onClick={onStart}>
          Begin Survey
        </button>

        <p className="welcome-time">
          Estimated time: 5-7 minutes
        </p>
      </div>
    </div>
  );
}

export default Welcome;
