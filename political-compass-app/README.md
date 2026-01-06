# Political Compass Survey

A modern, interactive web application that helps users discover their political position on a two-dimensional political compass through a comprehensive questionnaire.

## Overview

The Political Compass Survey maps political ideology across two independent axes:

- **Economic Axis (Left-Right)**: Measures views from state-controlled economy to free-market capitalism
- **Social Axis (Authoritarian-Libertarian)**: Measures views from centralized authority to personal freedom

## Features

- **36 Comprehensive Questions**: Carefully crafted questions covering economic and social policy areas
- **Interactive Survey Interface**: Clean, user-friendly design with progress tracking
- **Visual Results**: Beautiful SVG-based political compass visualization showing your position
- **Detailed Analysis**: In-depth breakdown of your political leanings with explanations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Privacy-First**: All calculations happen in your browser - no data is collected or stored
- **Modern Tech Stack**: Built with React 19 and Vite for optimal performance

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd political-compass-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Available Scripts

- `npm run dev` - Start the development server with hot-reload
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
political-compass-app/
├── src/
│   ├── components/          # React components
│   │   ├── Welcome.jsx      # Landing page
│   │   ├── Survey.jsx       # Survey orchestration
│   │   ├── Question.jsx     # Individual question display
│   │   ├── Progress.jsx     # Progress bar component
│   │   ├── Results.jsx      # Results page
│   │   └── Compass.jsx      # Political compass visualization
│   ├── data/
│   │   └── questions.js     # Question bank
│   ├── utils/
│   │   └── scoring.js       # Scoring algorithms
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
```

## How It Works

### Question Design

Questions are designed to measure political positions across two independent dimensions:

1. **Economic Questions**: Relate to government intervention in the economy, taxation, welfare, regulation, and free markets
2. **Social Questions**: Relate to personal freedoms, government authority, civil liberties, and social values

Each question is scored on a scale from -2 (Strongly Disagree) to +2 (Strongly Agree), with weights determining which axis it affects.

### Scoring Algorithm

1. User responses are collected for all 36 questions
2. Each answer is multiplied by the question's weight and direction
3. Scores are aggregated separately for economic and social axes
4. Final scores are normalized to a -10 to +10 scale for each axis
5. The position is plotted on the political compass

### Quadrants

- **Authoritarian Left**: Favor economic regulation and centralized authority
- **Authoritarian Right**: Favor free markets and centralized authority
- **Libertarian Left**: Favor economic regulation and personal freedoms
- **Libertarian Right**: Favor free markets and personal freedoms

## Technology Stack

- **React 19**: Modern UI framework with latest features
- **Vite**: Next-generation frontend build tool
- **JavaScript ES6+**: Modern JavaScript features
- **CSS3**: Custom styling with animations and gradients
- **SVG**: Scalable vector graphics for the compass visualization

## Customization

### Adding Questions

Edit `src/data/questions.js` to add or modify questions:

```javascript
{
  id: 37,
  text: "Your question here",
  axis: "economic", // or "social"
  weight: 1 // 1 or -1
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Colors and themes can be easily customized using CSS variables

### Scoring Logic

Modify `src/utils/scoring.js` to adjust:
- Score calculation methods
- Normalization ranges
- Quadrant definitions
- Analysis text

## Educational Disclaimer

This political compass is a simplified educational tool. Political beliefs are complex and nuanced, and cannot be fully captured by a two-dimensional graph. Results should not be considered definitive classifications of political ideology.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Future Enhancements

Potential improvements for future versions:
- Save/share results with unique URLs
- Compare results with historical political figures
- Multi-language support
- Additional axes (e.g., progressive-conservative)
- Export results as images
- Anonymous aggregate statistics

## License

This project is open source and available under the MIT License.

## Acknowledgments

Inspired by the original Political Compass concept and various political spectrum assessment tools.

---

Built with ❤️ using React and Vite
