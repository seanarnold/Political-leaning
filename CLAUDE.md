# CLAUDE.md - AI Assistant Guide for Political-leaning Repository

**Last Updated:** 2026-01-06
**Repository:** seanarnold/Political-leaning
**Status:** Active Development - React App Complete

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Structure](#repository-structure)
3. [Development Workflows](#development-workflows)
4. [Key Conventions](#key-conventions)
5. [AI Assistant Guidelines](#ai-assistant-guidelines)
6. [Common Tasks](#common-tasks)
7. [Technology Stack](#technology-stack)

---

## Project Overview

### Purpose
This repository contains a Political Compass Survey application - an interactive web tool that analyzes user responses to determine their political position on a two-dimensional compass (Economic Left-Right axis and Social Authoritarian-Libertarian axis).

### Current State
- **Status:** Active development - React application complete
- **Application:** Political Compass Survey (political-compass-app/)
- **Branch:** `claude/add-claude-documentation-OLc0x`
- **Remote:** http://127.0.0.1:64259/git/seanarnold/Political-leaning

---

## Repository Structure

### Current Directory Layout

```
Political-leaning/
├── CLAUDE.md                        # This file - AI assistant guide
└── political-compass-app/           # React application
    ├── src/
    │   ├── components/              # React components
    │   │   ├── Welcome.jsx          # Landing page
    │   │   ├── Survey.jsx           # Survey orchestration
    │   │   ├── Question.jsx         # Individual question display
    │   │   ├── Progress.jsx         # Progress bar component
    │   │   ├── Results.jsx          # Results page
    │   │   └── Compass.jsx          # Political compass visualization
    │   ├── data/
    │   │   └── questions.js         # Question bank (36 questions)
    │   ├── utils/
    │   │   └── scoring.js           # Scoring algorithms
    │   ├── App.jsx                  # Main application component
    │   ├── App.css                  # Application styles
    │   ├── main.jsx                 # Application entry point
    │   └── index.css                # Global styles
    ├── public/                      # Static assets
    ├── index.html                   # HTML template
    ├── package.json                 # Project dependencies
    ├── vite.config.js               # Vite configuration
    └── README.md                    # Application documentation
```

---

## Development Workflows

### Git Branching Strategy

#### Branch Naming Convention
- **Feature branches:** `claude/feature-name-<session-id>`
- **Bug fixes:** `claude/fix-issue-description-<session-id>`
- **Documentation:** `claude/docs-description-<session-id>`

**CRITICAL:** All branches MUST:
- Start with `claude/`
- End with the matching session ID
- Otherwise, push operations will fail with 403 HTTP code

#### Working with Git

**Committing Changes:**
```bash
git add <files>
git commit -m "Clear, descriptive message"
```

**Pushing Changes:**
```bash
git push -u origin <branch-name>
```
- If push fails due to network errors, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s)

**Fetching/Pulling:**
```bash
git fetch origin <branch-name>
git pull origin <branch-name>
```
- Apply same retry logic for network failures

### Commit Message Guidelines

Format:
```
<type>: <brief description>

<detailed explanation if needed>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `style`: Code style changes (formatting, etc.)

**Examples:**
- `feat: add sentiment analysis module`
- `fix: correct bias detection in classifier`
- `docs: update API usage examples`

---

## Key Conventions

### Code Style

#### General Principles
1. **Clarity over cleverness:** Write code that's easy to understand
2. **Avoid over-engineering:** Don't add features not explicitly requested
3. **Keep it simple:** Minimum complexity needed for the current task
4. **No premature optimization:** Optimize only when necessary

#### Security
- Validate all external input (user input, API responses, file contents)
- Trust internal code and framework guarantees
- Watch for: SQL injection, XSS, command injection, OWASP Top 10 vulnerabilities
- Never commit secrets (.env files, credentials, API keys)

#### Error Handling
- Only handle errors at system boundaries
- Don't add error handling for scenarios that can't happen
- Trust framework guarantees for internal operations

### File Operations
- **Always read files before editing them**
- Prefer editing existing files over creating new ones
- Don't create documentation files unless explicitly requested
- Use appropriate tools:
  - Read tool for reading files (not `cat`)
  - Edit tool for modifying files (not `sed/awk`)
  - Write tool for creating new files (not `echo >`)
  - Grep tool for searching (not `grep` command)
  - Glob tool for finding files (not `find`)

### Documentation
- Add comments only where logic isn't self-evident
- Don't add docstrings to unchanged code
- Keep documentation focused and concise
- Update CLAUDE.md when project structure changes significantly

---

## AI Assistant Guidelines

### Before Starting Any Task

1. **Read existing code** before proposing changes
2. **Understand context** by exploring relevant files
3. **Use TodoWrite tool** for multi-step tasks to track progress
4. **Ask for clarification** if requirements are ambiguous

### Task Execution

#### Simple Tasks (1-2 steps)
- Execute directly without TodoWrite tool
- Examples: Fix typo, add log statement, read file

#### Complex Tasks (3+ steps)
- Use TodoWrite tool to plan and track
- Break into manageable steps
- Mark tasks as in_progress/completed in real-time
- Example workflow:
  1. Create todo list
  2. Mark first task as in_progress
  3. Complete task
  4. Mark as completed
  5. Move to next task

#### Research Tasks
- Use Task tool with `subagent_type=Explore` for codebase exploration
- Don't use Glob/Grep directly for open-ended searches
- Examples: "Where are errors handled?", "What is the codebase structure?"

### Code Changes

**DO:**
- ✅ Make only requested changes
- ✅ Follow existing code patterns
- ✅ Preserve exact indentation
- ✅ Test changes when possible
- ✅ Fix security vulnerabilities immediately

**DON'T:**
- ❌ Add unrequested features
- ❌ Refactor surrounding code unnecessarily
- ❌ Add comments to unchanged code
- ❌ Create abstractions for one-time operations
- ❌ Use backwards-compatibility hacks (unused variables, re-exports)

### Communication Style
- Be concise and objective
- Output text directly (not via echo or comments)
- Use GitHub-flavored markdown
- No emojis unless requested
- Focus on facts over validation
- Reference code with pattern: `file_path:line_number`

### Tool Usage Priority

1. **Specialized tools over bash commands**
2. **Parallel execution** when operations are independent
3. **Sequential execution** when operations depend on each other
4. **Task tool with specialized agents** for complex operations:
   - `Explore` - Codebase exploration
   - `Plan` - Implementation planning
   - `claude-code-guide` - Claude Code documentation lookup

---

## Common Tasks

### Analyzing the Codebase

```bash
# Find specific files
# Use: Glob tool with pattern "**/*.py"

# Search for code patterns
# Use: Grep tool with pattern and optional file type

# Understand architecture
# Use: Task tool with subagent_type=Explore
```

### Adding New Features

1. **Understand requirements** (ask clarifying questions if needed)
2. **Explore related code** (read existing implementations)
3. **Plan approach** (use TodoWrite for complex features)
4. **Implement incrementally** (small, focused changes)
5. **Test functionality** (verify changes work)
6. **Commit and push** (clear commit message)

### Fixing Bugs

1. **Reproduce the issue** (understand the problem)
2. **Locate the cause** (read relevant code)
3. **Implement fix** (minimal, targeted change)
4. **Verify fix** (test the correction)
5. **Commit with clear message** (explain the fix)

### Updating Documentation

1. **Read current documentation**
2. **Make necessary updates**
3. **Ensure consistency** with actual codebase
4. **Commit changes**

---

## Technology Stack

### Current Stack

- **Programming Language:** JavaScript (ES6+)
- **Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Package Manager:** npm
- **Styling:** CSS3 with custom styles (no framework)
- **Graphics:** SVG for compass visualization
- **Development Tools:**
  - ESLint for code quality
  - Vite HMR for fast development
  - React DevTools compatible

### Key Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0"
}
```

### Development Setup

#### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

#### Installation
```bash
cd political-compass-app
npm install
```

#### Development Commands
```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

#### Project Features
- **36 Political Questions**: Covering economic and social axes
- **Real-time Scoring**: Client-side calculation (no backend required)
- **SVG Visualization**: Interactive political compass graph
- **Responsive Design**: Mobile, tablet, and desktop support
- **Privacy-First**: No data collection or storage

---

## Project-Specific Guidelines

### Political Content Analysis

**Important Considerations:**

1. **Neutrality and Bias:**
   - Maintain objectivity in analysis algorithms
   - Document methodology and assumptions
   - Avoid introducing personal or systemic bias
   - Consider diverse political contexts

2. **Data Handling:**
   - Handle text data responsibly
   - Consider privacy implications
   - Document data sources
   - Maintain transparency in classification methods

3. **Ethical Considerations:**
   - Be aware of potential misuse
   - Document limitations of analysis
   - Consider cultural and regional differences
   - Provide appropriate disclaimers

4. **Testing and Validation:**
   - Test across diverse political content
   - Validate against established benchmarks
   - Document accuracy and limitations
   - Include edge cases in testing

---

## Maintenance

### Updating This Document

Update CLAUDE.md when:
- Project structure changes significantly
- New technologies are added
- Development workflows evolve
- New conventions are established
- Key dependencies change

### Version History

- **2026-01-06 (Update 2):** Updated with React application tech stack and structure
- **2026-01-06 (Initial):** Initial CLAUDE.md creation (empty repository setup)

---

## Quick Reference Commands

### Git Operations
```bash
# Create and switch to new branch
git checkout -b claude/feature-name-<session-id>

# Stage and commit
git add <files>
git commit -m "type: description"

# Push to remote
git push -u origin claude/feature-name-<session-id>

# Fetch updates
git fetch origin <branch-name>
```

### Common File Operations
- **Read file:** Use Read tool
- **Edit file:** Use Edit tool (read first!)
- **Search code:** Use Grep tool
- **Find files:** Use Glob tool
- **Create file:** Use Write tool (prefer editing existing)

---

## Getting Help

### For AI Assistants
- Check project README.md for project-specific information
- Use Task tool with `claude-code-guide` for Claude Code questions
- Read existing code before asking questions
- When uncertain, ask the user for clarification

### For Human Developers
- Report issues: https://github.com/anthropics/claude-code/issues
- Use `/help` command in Claude Code CLI
- Review this CLAUDE.md for AI collaboration guidelines

---

## Notes

This document is a living guide. As the Political-leaning project evolves, keep this documentation current to ensure effective collaboration between human developers and AI assistants.

**Remember:** The goal is to build reliable, maintainable, and ethical software for political content analysis. Every change should contribute to that objective.
