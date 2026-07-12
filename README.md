<div align="center">

# 🚀 Prince Pal — Portfolio

**Full Stack Developer Portfolio** built with React, TypeScript, Tailwind CSS & Express.js

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[Live Demo](#) · [Report Bug](https://github.com/princepal09/Portfolio/issues) · [Request Feature](https://github.com/princepal09/Portfolio/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Screenshots](#-screenshots)
- [Contact](#-contact)
- [License](#-license)

---

## 🎯 About

A modern, responsive developer portfolio website showcasing my skills, projects, experience, and GitHub activity. The application follows a **monorepo architecture** with a React frontend and an Express.js backend that integrates with the GitHub GraphQL API to display real-time contribution statistics.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI** | Sleek dark-themed interface built with shadcn/ui components and Tailwind CSS |
| 🌀 **Smooth Animations** | Page transitions and micro-interactions powered by Framer Motion |
| 📊 **Live GitHub Stats** | Real-time contribution graph, streaks, and commit statistics via GitHub GraphQL API |
| 💼 **Project Showcase** | Interactive project cards with tech tags, live demo links, and GitHub links |
| 🏢 **Experience Timeline** | Professional experience section with downloadable internship certificates |
| 🛠️ **Skills Grid** | Visual tech stack display with official devicon logos |
| 📬 **Contact Form** | Form validation with React Hook Form + Zod schema validation |
| 📱 **Fully Responsive** | Mobile-first design that adapts seamlessly across all devices |
| ⚡ **Blazing Fast** | Vite-powered dev server with optimized production builds |
| 🔗 **Client-Side Routing** | SPA navigation with React Router v7 |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19** | UI library |
| **TypeScript** | Type-safe development |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **shadcn/ui** | Accessible UI component library |
| **Framer Motion** | Animations & transitions |
| **React Router v7** | Client-side routing |
| **React Hook Form** | Form management |
| **Zod** | Schema validation |
| **Axios** | HTTP client |
| **Lucide React** | Icon library |
| **Sonner** | Toast notifications |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js 22** | Runtime environment |
| **Express 5** | Web framework |
| **Octokit** | GitHub API client (GraphQL) |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |
| **ts-node** | TypeScript execution |
| **Nodemon** | Development hot-reload |

---

## 📁 Project Structure

```
Portfolio/
├── client/                    # React frontend
│   ├── public/                # Static assets (SVGs, PDFs, images)
│   ├── src/
│   │   ├── assets/            # Source assets
│   │   ├── components/
│   │   │   ├── Layout/        # Header, Footer, Layout wrapper
│   │   │   ├── Sections/      # Hero, Skills, Experience, Projects, Github, Contact
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── ContactForm.tsx
│   │   │   └── GithubStats.tsx
│   │   ├── constants/         # Portfolio data (projects, skills, experience)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   ├── pages/             # Page components
│   │   ├── App.tsx            # Router configuration
│   │   ├── App.css            # Global styles
│   │   ├── index.css          # Tailwind directives & design tokens
│   │   └── main.tsx           # Entry point
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
│
├── server/                    # Express backend
│   ├── src/
│   │   ├── github/            # GitHub GraphQL API integration
│   │   │   └── github.ts
│   │   ├── routes/            # API route definitions
│   │   │   └── route.ts
│   │   ├── app.ts             # Express app configuration
│   │   └── server.ts          # Server entry point
│   ├── tsconfig.json
│   └── package.json
│
├── package.json               # Root workspace scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22.x
- **npm** ≥ 10.x
- A **GitHub Personal Access Token** (for the contribution graph feature)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/princepal09/Portfolio.git
   cd Portfolio
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Install client & server dependencies**

   ```bash
   cd client && npm install && cd ..
   cd server && npm install && cd ..
   ```

4. **Set up environment variables** (see [Environment Variables](#-environment-variables))

5. **Start the development server**

   ```bash
   npm run dev
   ```

   This runs both the client and server concurrently:
   - 🌐 **Client**: `http://localhost:5173`
   - 🔧 **Server**: `http://localhost:3000`

---

## 🔑 Environment Variables

### Client (`client/.env`)

```env
VITE_BASE_URL=http://localhost:3000/api/v1
```

### Server (`server/.env`)

```env
GITHUB_TOKEN=your_github_personal_access_token
CLIENT_URL=http://localhost:5173
PORT=3000
```

> **💡 Tip:** Generate a GitHub token at [github.com/settings/tokens](https://github.com/settings/tokens) with `read:user` scope for the contribution graph.

---

## 📜 Scripts

### Root

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both client & server concurrently |
| `npm run client` | Start only the frontend dev server |
| `npm run server` | Start only the backend dev server |

### Client (`/client`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### Server (`/server`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with Nodemon (hot-reload) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled production server |

---

## 📸 Screenshots

> Add screenshots of your portfolio here:
>
> ```
> ![Hero Section](screenshots/hero.png)
> ![Projects Section](screenshots/projects.png)
> ![GitHub Stats](screenshots/github-stats.png)
> ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/princepal09/Portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact

**Prince Pal** — Full Stack Developer

- 📧 Email: [princepal262501@gmail.com](mailto:princepal262501@gmail.com)
- 🔗 LinkedIn: [linkedin.com/in/princepal09](https://linkedin.com/in/princepal09)
- 🐙 GitHub: [github.com/princepal09](https://github.com/princepal09)
- 📍 Bhimtal, Nainital, Uttarakhand, India

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Prince Pal](https://github.com/princepal09)

</div>
