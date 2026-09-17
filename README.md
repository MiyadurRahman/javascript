# javascript

A personal collection of JavaScript practice scripts and small projects — covering core language fundamentals, array/object methods, modern ES6+ features, DOM manipulation, and a handful of "todo list" mini-projects. It also includes a built-in JS/DOM method cheat sheet (`readme_explanation`).

## 📑 Table of Contents

- [Repository Structure](#-repository-structure)
- [Topics Covered](#-topics-covered)
  - [Language Fundamentals](#language-fundamentals)
  - [Array Methods](#array-methods)
  - [Modern JS Features](#modern-js-features)
  - [DOM Manipulation & Todo Apps](#dom-manipulation--todo-apps)
  - [Function Design / Real-World Practice](#function-design--real-world-practice)
  - [Reference Cheat Sheet](#reference-cheat-sheet)
- [Requirements](#️-requirements)
- [Usage](#️-usage)
- [Notes](#-notes)
- [License](#-license)

## 📂 Repository Structure

```
javascript/
├── variables.js                          # let/const, variable declaration basics
├── operator.js                           # Comparison/assignment operators
├── loops.js                              # for...in vs for...of over arrays
├── conditinal.js                         # (empty placeholder)
├── truthy_falsy.js                       # (empty placeholder)
├── array.js                              # Array indexing + built-in methods
├── arrow_fuction.js                      # Arrow functions (BMI calculator via CLI args)
├── practice.js                           # Function practice (BMI calculator, function-declaration form)
├── solve_array.js                        # Finding max value in an array
├── solve_obj.js                          # Nested object practice (student record)
├── stirng.js                             # String basics & template literals
├── index.html                            # Standalone HTML page
├── package-lock.json                     # Empty npm lockfile (no dependencies)
├── readme_explanation                    # JS/DOM built-in method reference notes
│
├── array_methd/
│   ├── part1.js / part2.js / part3.js    # forEach, map, filter, and friends
│   ├── chaining_and_nullish_coalescing.js
│   └── tempCodeRunnerFile.js
│
├── modern_j_powerful_array_method/
│   ├── destrucctering.js                 # Array/object destructuring
│   ├── spread_operator.js                # Spread operator (`...`)
│   ├── rest_operator/                    # Rest operator practice
│   ├── objects.js                        # Object literals & properties
│   ├── literals.js                       # (empty placeholder)
│   ├── import.js / export.js             # ES module import/export syntax
│   ├── fetch/fetch.js                    # fetch() API practice
│   ├── practice.js
│   └── tempCodeRunnerFile.js
│
├── using_function_for_realprojects.js/
│   ├── dry.js                            # DRY principle: order-processing validation functions
│   └── miniproject.js                    # Student-records mini project
│
└── dom/
    ├── index.html / index.js             # Basic DOM selection & event handling
    ├── todo1/  (index.htm, index1.js)    # Todo list app v1
    ├── todo3/  (index.htm, index1.js)    # Todo list app v3
    ├── todo4/  (index.htm, index4.js)    # Todo list app v4
    ├── todo5/  (index.htm, app.js)       # Todo list app v5
    └── todo6/  (index.htm, app.js)       # Todo list app v6
```

> Note: `using_function_for_realprojects.js/` is a **folder** (its name just happens to end in `.js`), not a script file.

## 🧠 Topics Covered

### Language Fundamentals
- Variables (`let`/`const`), operators, loops (`for...in` vs `for...of`), strings and template literals, and basic array indexing — in the top-level `.js` files.

### Array Methods
- `array_methd/` — hands-on practice with `forEach`, `map`, `filter`, and other built-in array methods, plus optional chaining (`?.`) and the nullish coalescing operator (`??`).

### Modern JS Features
- `modern_j_powerful_array_method/` — destructuring, the spread and rest operators, object literals, ES module `import`/`export` syntax, and the `fetch()` API.

### DOM Manipulation & Todo Apps
- `dom/` — selecting elements (`getElementById`, event listeners) and a progression of small **todo-list apps** (`todo1` → `todo6`), each pairing an HTML page with its own JS logic for adding/rendering tasks.

### Function Design / Real-World Practice
- `using_function_for_realprojects.js/` — applying the DRY (Don't Repeat Yourself) principle to a small order-processing validation example, and a student-records mini project.

### Reference Cheat Sheet
- `readme_explanation` — a quick-reference list of common built-in methods for **Array**, **Number/Math**, **Object/JSON**, and the **DOM**, written as short one-line explanations.

## 🛠️ Requirements

- A modern web browser (for the `dom/` examples and `index.html`)
- [Node.js](https://nodejs.org/) (for running the plain `.js` practice files from the command line)

No external npm packages are used — `package-lock.json` has no dependencies.

## ▶️ Usage

**Run a standalone script with Node:**
```bash
node variables.js
node array.js
```

**Scripts that take command-line arguments** (e.g. the BMI calculators):
```bash
node arrow_fuction.js 70 1.75
node practice.js 70 1.75
```

**Run a DOM/todo example in the browser:** open the corresponding `index.htm`/`index.html` file directly, e.g.:
```
dom/todo5/index.htm
```
This loads its paired script (`app.js`) and lets you interact with the todo list in the browser.

## 📌 Notes

- This repository is a personal learning/practice log, so file names occasionally contain typos (e.g. `arrow_fuction.js`, `stirng.js`, `array_methd`, `destrucctering.js`) and some files use `.htm` instead of `.html`.
- Several files are currently empty placeholders: `conditinal.js`, `truthy_falsy.js`, `modern_j_powerful_array_method/literals.js`, and `modern_j_powerful_array_method/fetch/fetch.js`.
- `tempCodeRunnerFile.js` files are leftovers from the VS Code "Code Runner" extension and aren't part of the actual practice content.

## 📄 License

No license has been specified for this repository. All rights are reserved by the author unless stated otherwise.
