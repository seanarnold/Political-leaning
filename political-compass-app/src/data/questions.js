// Political Compass Questions
// Each question affects either economic (left-right) or social (authoritarian-libertarian) axis
// Score: Strongly Disagree (-2), Disagree (-1), Neutral (0), Agree (1), Strongly Agree (2)

export const questions = [
  // Economic Axis Questions (left = negative, right = positive)
  {
    id: 1,
    text: "The free market should operate without government regulation.",
    axis: "economic",
    weight: 1
  },
  {
    id: 2,
    text: "A progressive tax system is necessary to reduce wealth inequality.",
    axis: "economic",
    weight: -1
  },
  {
    id: 3,
    text: "Private companies run more efficiently than government-run services.",
    axis: "economic",
    weight: 1
  },
  {
    id: 4,
    text: "Healthcare should be universally provided by the government.",
    axis: "economic",
    weight: -1
  },
  {
    id: 5,
    text: "Labor unions have too much power in today's economy.",
    axis: "economic",
    weight: 1
  },
  {
    id: 6,
    text: "The government should provide a universal basic income.",
    axis: "economic",
    weight: -1
  },
  {
    id: 7,
    text: "Corporate taxes should be reduced to encourage business growth.",
    axis: "economic",
    weight: 1
  },
  {
    id: 8,
    text: "Essential industries like utilities and transportation should be nationalized.",
    axis: "economic",
    weight: -1
  },
  {
    id: 9,
    text: "Minimum wage laws interfere with the natural employment market.",
    axis: "economic",
    weight: 1
  },
  {
    id: 10,
    text: "The wealthy should pay significantly higher taxes than they currently do.",
    axis: "economic",
    weight: -1
  },
  {
    id: 11,
    text: "Free trade agreements benefit national economies.",
    axis: "economic",
    weight: 1
  },
  {
    id: 12,
    text: "Workers should have representation on corporate boards.",
    axis: "economic",
    weight: -1
  },

  // Social Axis Questions (libertarian = negative, authoritarian = positive)
  {
    id: 13,
    text: "National security is more important than individual privacy.",
    axis: "social",
    weight: 1
  },
  {
    id: 14,
    text: "People should be free to make their own choices, even if harmful to themselves.",
    axis: "social",
    weight: -1
  },
  {
    id: 15,
    text: "Strong traditional values should be maintained in society.",
    axis: "social",
    weight: 1
  },
  {
    id: 16,
    text: "Victimless crimes should not be criminalized.",
    axis: "social",
    weight: -1
  },
  {
    id: 17,
    text: "Government surveillance is necessary to prevent terrorism.",
    axis: "social",
    weight: 1
  },
  {
    id: 18,
    text: "Censorship of offensive content is rarely justified.",
    axis: "social",
    weight: -1
  },
  {
    id: 19,
    text: "A strong military is essential for national prosperity.",
    axis: "social",
    weight: 1
  },
  {
    id: 20,
    text: "People should be allowed to protest even if it disrupts public order.",
    axis: "social",
    weight: -1
  },
  {
    id: 21,
    text: "Schools should instill patriotism and national values in students.",
    axis: "social",
    weight: 1
  },
  {
    id: 22,
    text: "Personal drug use should be a matter of individual choice, not law.",
    axis: "social",
    weight: -1
  },
  {
    id: 23,
    text: "There should be stricter regulations on what media can publish.",
    axis: "social",
    weight: 1
  },
  {
    id: 24,
    text: "Same-sex couples should have the same adoption rights as heterosexual couples.",
    axis: "social",
    weight: -1
  },
  {
    id: 25,
    text: "Border security should be prioritized over immigration rights.",
    axis: "social",
    weight: 1
  },
  {
    id: 26,
    text: "Religious institutions should have no influence on government policy.",
    axis: "social",
    weight: -1
  },
  {
    id: 27,
    text: "Law and order must be maintained at all costs.",
    axis: "social",
    weight: 1
  },
  {
    id: 28,
    text: "Government should not regulate what consenting adults do in private.",
    axis: "social",
    weight: -1
  },
  {
    id: 29,
    text: "National identity is more important than multiculturalism.",
    axis: "social",
    weight: 1
  },
  {
    id: 30,
    text: "Individuals should be free to express any opinion, regardless of who it offends.",
    axis: "social",
    weight: -1
  },

  // Mixed questions for better analysis
  {
    id: 31,
    text: "Environmental protection should take priority over economic growth.",
    axis: "economic",
    weight: -1
  },
  {
    id: 32,
    text: "Military spending should be reduced in favor of social programs.",
    axis: "economic",
    weight: -1
  },
  {
    id: 33,
    text: "Gun ownership rights should be strongly protected.",
    axis: "social",
    weight: -1
  },
  {
    id: 34,
    text: "The death penalty is an appropriate punishment for serious crimes.",
    axis: "social",
    weight: 1
  },
  {
    id: 35,
    text: "Inheritance taxes should be increased significantly.",
    axis: "economic",
    weight: -1
  },
  {
    id: 36,
    text: "Mass surveillance is an acceptable trade-off for safety.",
    axis: "social",
    weight: 1
  }
];

export const answerOptions = [
  { value: -2, label: "Strongly Disagree" },
  { value: -1, label: "Disagree" },
  { value: 0, label: "Neutral" },
  { value: 1, label: "Agree" },
  { value: 2, label: "Strongly Agree" }
];
