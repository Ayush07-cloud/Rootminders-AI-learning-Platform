# StemSphere AI Learning Platform

This is a feature-rich, full-stack Learning Management System (LMS) frontend built with React, Vite, and Tailwind CSS. It features an integrated AI Chatbot Tutor powered by Gemini, interactive coding challenges, quizzes, discussion forums, and comprehensive dashboards for students, instructors, and admins.

## Setup and Installation

### Prerequisites

- Node.js (version 18.x or later)
- npm or another package manager (yarn, pnpm)

### 1. Install dependencies

In the project's root directory, run:

```bash
npm install
```

### 2. Set up Environment Variables

The AI Tutor feature uses the Google Gemini API. You'll need an API key for it to work.

1.  Create a new file named `.env` in the root of the project.
2.  Copy the contents of `.env.example` into your new `.env` file.
3.  Add your Google Gemini API key to the `.env` file:

    ```
    VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

    You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Run the Development Server

Once the dependencies are installed and the environment variables are set, you can start the local development server.

```bash
npm run dev
```

This will start the Vite development server, and you can view the application by navigating to the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Bundles the app for production.
-   `npm run preview`: Serves the production build locally for testing.
