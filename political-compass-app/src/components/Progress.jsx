function Progress({ current, total, percentage }) {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">
          Question {current} of {total}
        </span>
        <span className="progress-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default Progress;
