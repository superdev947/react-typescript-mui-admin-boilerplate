# react-typescript-mui-admin-boilerplate

A modern, responsive admin dashboard built with React, MUI (Material-UI), Redux Toolkit, and TypeScript.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- ⚡️ Fast, responsive UI with Material-UI v6
- 🔒 Authentication flow (login, protected routes)
- 🗂 Modular folder structure for scalability
- 🌙 Light/Dark mode toggle
- 🛠 Built with TypeScript for type safety
- 🔄 State management with Redux Toolkit & redux-persist
- 📦 Modern build setup with Webpack 5

---

## Tech Stack

- **Frontend:** React 18, TypeScript, Material-UI (MUI)
- **State Management:** Redux Toolkit, React-Redux, redux-persist
- **Routing:** React Router v7
- **Build Tools:** Webpack 5, Babel, ESLint, Prettier
- **Other:** Day.js, dotenv

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation

```bash
git clone https://github.com/superdev947/react-typescript-mui-admin-boilerplate.git
cd react-typescript-mui-admin-boilerplate
npm install
```

---

## Available Scripts

- `npm run dev` — Start development server with hot reload
- `npm run build` — Build for production
- `npm run start` — Serve the production build
- `npm run lint` — Lint the codebase with ESLint
- `npm run format` — Format code with Prettier

---

## Project Structure

```
src/
  components/      # Reusable UI components
  configs/         # App configuration files
  constants/       # App-wide constants (e.g., routes)
  hooks/           # Custom React hooks
  layout/          # Layout components (Header, Sidebar, etc.)
  pages/           # Page components (Home, Login, Jobs, etc.)
  routes/          # Routing setup and protected routes
  store/           # Redux store and reducers
  theme/           # MUI theme customization
  types/           # TypeScript type definitions
  App.tsx          # Main app component
  index.tsx        # Entry point
```

---

## Usage

1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal).

3. **Login:**  
   Use the login page to access protected routes.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

[MIT](LICENSE)

---
