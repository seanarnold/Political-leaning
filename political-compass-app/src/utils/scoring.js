import { questions } from '../data/questions';

/**
 * Calculate political compass scores from user answers
 * @param {Object} answers - Object with question IDs as keys and answer values (-2 to 2)
 * @returns {Object} Scores for economic and social axes, normalized to -10 to 10
 */
export function calculateScores(answers) {
  let economicScore = 0;
  let socialScore = 0;
  let economicCount = 0;
  let socialCount = 0;

  questions.forEach(question => {
    const answer = answers[question.id];
    if (answer !== undefined && answer !== null) {
      const score = answer * question.weight;

      if (question.axis === 'economic') {
        economicScore += score;
        economicCount++;
      } else if (question.axis === 'social') {
        socialScore += score;
        socialCount++;
      }
    }
  });

  // Normalize scores to -10 to 10 scale
  const maxPossibleScore = 2; // Strongly agree/disagree
  const normalizedEconomic = economicCount > 0
    ? (economicScore / (economicCount * maxPossibleScore)) * 10
    : 0;
  const normalizedSocial = socialCount > 0
    ? (socialScore / (socialCount * maxPossibleScore)) * 10
    : 0;

  return {
    economic: Number(normalizedEconomic.toFixed(2)),
    social: Number(normalizedSocial.toFixed(2))
  };
}

/**
 * Get political quadrant based on scores
 * @param {number} economic - Economic score (-10 to 10)
 * @param {number} social - Social score (-10 to 10)
 * @returns {Object} Quadrant name and description
 */
export function getQuadrant(economic, social) {
  if (economic > 0 && social > 0) {
    return {
      name: "Authoritarian Right",
      description: "You favor free markets and a strong centralized authority.",
      color: "#4A90E2"
    };
  } else if (economic <= 0 && social > 0) {
    return {
      name: "Authoritarian Left",
      description: "You favor economic regulation and a strong centralized authority.",
      color: "#E24A4A"
    };
  } else if (economic <= 0 && social <= 0) {
    return {
      name: "Libertarian Left",
      description: "You favor economic regulation with personal and social freedoms.",
      color: "#50C878"
    };
  } else {
    return {
      name: "Libertarian Right",
      description: "You favor free markets with personal and social freedoms.",
      color: "#FFD700"
    };
  }
}

/**
 * Get detailed analysis based on specific scores
 * @param {number} economic - Economic score (-10 to 10)
 * @param {number} social - Social score (-10 to 10)
 * @returns {Object} Detailed analysis
 */
export function getDetailedAnalysis(economic, social) {
  const economicLabel = economic > 3 ? "strongly right-leaning"
    : economic > 0 ? "moderately right-leaning"
    : economic > -3 ? "moderately left-leaning"
    : "strongly left-leaning";

  const socialLabel = social > 3 ? "strongly authoritarian"
    : social > 0 ? "moderately authoritarian"
    : social > -3 ? "moderately libertarian"
    : "strongly libertarian";

  const economicText = economic > 0
    ? "You tend to favor free market solutions, lower taxes, and limited economic intervention by government."
    : "You tend to favor government regulation, social programs, and wealth redistribution.";

  const socialText = social > 0
    ? "You tend to favor traditional values, strong law enforcement, and centralized authority."
    : "You tend to favor individual freedoms, personal autonomy, and minimal government interference in personal matters.";

  return {
    economicLabel,
    socialLabel,
    economicText,
    socialText,
    summary: `Your political views are ${economicLabel} on economic issues and ${socialLabel} on social issues.`
  };
}

/**
 * Get percentage completion of survey
 * @param {Object} answers - Object with question IDs as keys
 * @returns {number} Percentage from 0 to 100
 */
export function getCompletionPercentage(answers) {
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  return Math.round((answeredCount / totalQuestions) * 100);
}

/**
 * Check if survey is complete
 * @param {Object} answers - Object with question IDs as keys
 * @returns {boolean} True if all questions answered
 */
export function isSurveyComplete(answers) {
  return Object.keys(answers).length === questions.length;
}
