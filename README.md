# Political Leaning Analysis

A web-based Political Compass Survey application that helps users discover their political position through an interactive questionnaire.

## 🎯 Live Demo

Visit the live application: **[https://seanarnold.github.io/Political-leaning/](https://seanarnold.github.io/Political-leaning/)**

## 📊 About

This project provides an interactive political compass survey that maps users' political views across two dimensions:

- **Economic Axis (Left-Right)**: Views on free markets vs. government regulation
- **Social Axis (Authoritarian-Libertarian)**: Views on personal freedoms vs. centralized authority

The survey consists of 36 carefully designed questions that analyze your political leanings and visualize your position on a two-dimensional political compass.

## ✨ Features

- 36 comprehensive political questions
- Real-time scoring and analysis
- Beautiful SVG-based compass visualization
- Detailed breakdown of political positions
- Fully responsive design
- Privacy-first (no data collection)
- Built with React 19 and Vite

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/seanarnold/Political-leaning.git

# Navigate to the app directory
cd Political-leaning/political-compass-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to see the app running locally.

## 📁 Project Structure

```
Political-leaning/
├── political-compass-app/    # React application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── data/            # Question bank
│   │   ├── utils/           # Scoring algorithms
│   │   └── ...
│   ├── package.json
│   └── README.md            # Detailed app documentation
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages deployment
└── CLAUDE.md                # AI assistant guide
```

## 🛠 Technology Stack

- **React 19** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **JavaScript ES6+** - Modern JavaScript
- **CSS3** - Custom styling with gradients and animations
- **SVG** - Scalable graphics for compass visualization
- **GitHub Pages** - Automated deployment via GitHub Actions

## 📖 Documentation

- **[App README](political-compass-app/README.md)** - Detailed application documentation
- **[CLAUDE.md](CLAUDE.md)** - AI assistant development guide

## 🎨 How It Works

1. **Answer Questions**: Rate 36 statements from "Strongly Disagree" to "Strongly Agree"
2. **Real-time Calculation**: Scores are computed client-side using weighted algorithms
3. **Visualization**: Your position is plotted on a political compass
4. **Analysis**: Receive detailed insights about your political leanings

### Quadrants

- **Authoritarian Left**: Economic regulation + centralized authority
- **Authoritarian Right**: Free markets + centralized authority
- **Libertarian Left**: Economic regulation + personal freedoms
- **Libertarian Right**: Free markets + personal freedoms

## 🔒 Privacy

All calculations happen entirely in your browser. No user data is collected, stored, or transmitted. The survey is completely anonymous.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs or suggest features via [Issues](https://github.com/seanarnold/Political-leaning/issues)
- Submit Pull Requests with improvements
- Share feedback on the questions or scoring algorithm

## 📜 License

This project is open source and available under the MIT License.

## ⚠️ Disclaimer

This political compass is a simplified educational tool. Political beliefs are complex and nuanced, and cannot be fully captured by a two-dimensional graph. Results should not be considered definitive classifications of political ideology.

## 🙏 Acknowledgments

Inspired by the original Political Compass concept and various political spectrum assessment tools.

---

**Built with ❤️ using React and Vite**

*For development guidelines and AI assistant collaboration, see [CLAUDE.md](CLAUDE.md)*
