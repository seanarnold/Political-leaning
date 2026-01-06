function Compass({ economic, social }) {
  // Convert scores (-10 to 10) to percentage position (0 to 100)
  const xPercent = ((economic + 10) / 20) * 100;
  const yPercent = ((social + 10) / 20) * 100;

  return (
    <div className="compass-container">
      <svg
        className="compass-svg"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background quadrants */}
        <rect x="0" y="0" width="200" height="200" fill="#ffebeb" />
        <rect x="200" y="0" width="200" height="200" fill="#e6f3ff" />
        <rect x="0" y="200" width="200" height="200" fill="#e6ffe6" />
        <rect x="200" y="200" width="200" height="200" fill="#fff9e6" />

        {/* Grid lines */}
        <line x1="200" y1="0" x2="200" y2="400" stroke="#999" strokeWidth="2" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="#999" strokeWidth="2" />

        {/* Quadrant labels */}
        <text x="60" y="80" className="quadrant-label" fill="#c44" fontWeight="bold">
          Authoritarian
        </text>
        <text x="80" y="100" className="quadrant-label" fill="#c44" fontWeight="bold">
          Left
        </text>

        <text x="260" y="80" className="quadrant-label" fill="#44c" fontWeight="bold">
          Authoritarian
        </text>
        <text x="270" y="100" className="quadrant-label" fill="#44c" fontWeight="bold">
          Right
        </text>

        <text x="70" y="320" className="quadrant-label" fill="#4c4" fontWeight="bold">
          Libertarian
        </text>
        <text x="90" y="340" className="quadrant-label" fill="#4c4" fontWeight="bold">
          Left
        </text>

        <text x="260" y="320" className="quadrant-label" fill="#cc4" fontWeight="bold">
          Libertarian
        </text>
        <text x="280" y="340" className="quadrant-label" fill="#cc4" fontWeight="bold">
          Right
        </text>

        {/* Axis labels */}
        <text x="10" y="205" fontSize="12" fill="#666">Left</text>
        <text x="360" y="205" fontSize="12" fill="#666">Right</text>
        <text x="190" y="20" fontSize="12" fill="#666">Auth</text>
        <text x="185" y="390" fontSize="12" fill="#666">Lib</text>

        {/* User position dot */}
        <circle
          cx={xPercent * 4}
          cy={yPercent * 4}
          r="8"
          fill="#ff0000"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Position lines */}
        <line
          x1={xPercent * 4}
          y1={yPercent * 4}
          x2={xPercent * 4}
          y2="200"
          stroke="#ff0000"
          strokeWidth="1"
          strokeDasharray="4"
          opacity="0.5"
        />
        <line
          x1={xPercent * 4}
          y1={yPercent * 4}
          x2="200"
          y2={yPercent * 4}
          stroke="#ff0000"
          strokeWidth="1"
          strokeDasharray="4"
          opacity="0.5"
        />
      </svg>

      <div className="compass-legend">
        <div className="legend-item">
          <div className="legend-dot"></div>
          <span>Your Position</span>
        </div>
        <div className="legend-scores">
          <span>Economic: {economic > 0 ? '+' : ''}{economic}</span>
          <span>Social: {social > 0 ? '+' : ''}{social}</span>
        </div>
      </div>
    </div>
  );
}

export default Compass;
