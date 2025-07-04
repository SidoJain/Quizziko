# Quizziko

**Quizziko** is a fun, interactive web-based quiz app featuring multiple categories, sound effects, difficulty levels, and animated transitions. Users can test their knowledge across various topics and track their score, with dynamic feedback for correct and incorrect answers.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

---

## Features

- Multiple quiz categories: Shapes, Geography, Math, General Knowledge, Animals, Pop Culture
- Difficulty selection: Easy, Medium, Hard
- Audio feedback: correct/incorrect sounds, start sound, end-game tones
- Animated transitions for smoother UX
- Score tracking and result screen
- Confirm dialog when exiting mid-quiz

---

## Tech Stack

- **Frontend:** HTML, CSS, Vanilla JavaScript
- **Modules:** JavaScript ES6 modules (`script.js`, `questions.js`)
- **Assets:** Audio feedback for UI interaction

---

## Getting Started

### Installation

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/SidoJain/Quizziko.git
cd Quizziko
```

Then open the `index.html` file manually, or serve using a local server (recommended for module support):

```bash
npx serve .
```

### Folder Structure

```
Quizziko/
├── assets/               # Audio files and favicon
├── index.html            # Main HTML structure
├── style.css             # Styling for the quiz UI
├── script.js             # Quiz logic and interaction
├── questions.js          # Structured question data (modular)
```

---

## Usage

1. **Open the App**: Load `index.html` in a browser.
2. **Select a Category**: Choose from various quiz categories.
3. **Choose Difficulty**: Easy, Medium, or Hard.
4. **Answer Questions**: Click one of the three options.
5. **Check and Proceed**: Use the "Check" and "Next" buttons.
6. **View Score**: At the end, see your score and optionally replay.

---

## Customization

You can add or modify questions by editing `questions.js`. Questions follow a structured array format based on category and difficulty, allowing you to scale the quiz easily.

To replace or add sound effects, place `.mp3` files in the `assets/` folder and update the paths in `script.js`.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).