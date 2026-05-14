# ✨ Quick Resume - Frontend

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-State-orange?style=for-the-badge)](https://github.com/pmndrs/zustand)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-blue?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A modern, interactive web application built with **Next.js 16** that guides users through creating professional resumes using an AI-powered chatbot interface.

---

## 📖 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Architecture](#-project-architecture)
- [Integration](#-integration)
- [Developed By](#-developed-by)

---

## ✨ Features

- 💬 **Conversational UI**: A sleek, step-by-step chatbot interface powered by Framer Motion.
- 📊 **Real-time Preview**: Watch your resume take shape as you provide information.
- 🎨 **Modern Aesthetics**: Built with Tailwind CSS 4 and Radix UI for a premium look and feel.
- 📥 **Instant PDF Generation**: One-click professional PDF downloads.
- 📱 **Fully Responsive**: Optimized for seamless experience on mobile, tablet, and desktop.
- ⚡ **Lightning Fast**: Leverages Next.js 16 App Router for optimal performance.

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Components** | [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **State Management** | [Zustand](https://github.com/pmndrs/zustand) |
| **API Client** | [Axios](https://axios-http.com/) |
| **PDF Rendering** | [@react-pdf/renderer](https://react-pdf.org/) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm / yarn / pnpm

### Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone <repository-url>
   cd AI_RESUME_GENERATOR_FRONTEND
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env.local` file in the root:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. **Run Development Server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🏗️ Project Architecture

```text
src/
├── app/            # Next.js App Router (pages and layouts)
├── components/     # Atomic UI components and feature-specific components
│   └── ui/         # Base Radix + Tailwind components
├── services/       # API abstraction layer (Axios clients)
├── store/          # Zustand stores for global state management
├── types/          # TypeScript interfaces and shared types
└── utils/          # Utility functions and formatting logic
```

---

## 🌐 Integration

This frontend is designed to work seamlessly with the [Quick Resume Backend](https://github.com/Yashwant-Rangrej/AI_RESUME_GENERATOR_BACKEND). 

**Key API Interactions:**
- **Chat Flow**: Communicates with `/resume/start`, `/resume/question`, and `/resume/answer`.
- **Generation**: Uses `/resume/direct-generate` for real-time PDF creation from local state.

---

## 👨‍💻 Developed By

**Yashwant Rangrej**
- [GitHub](https://github.com/Yashwant-Rangrej)
- [LinkedIn](https://www.linkedin.com/in/yashwant-rangrej-0856993a8/)
