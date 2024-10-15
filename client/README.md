# Client for User Management Application

## Description

This is the client-side application for a user management system built with React and Vite. It provides a user-friendly interface for registering, logging in, and managing user profiles.

## Features

- **User Registration**: Allows users to create an account.
- **User Login**: Provides authentication for users.
- **Profile Management**: Users can view and update their profiles.
- **Custom Hooks**: Utilizes custom hooks for cleaner and reusable code.
- **Dynamic Routing**: Implements dynamic routing for a seamless user experience.
- **Context API**: Manages global state using React's Context API.
- **Data Persistence**: Persists user data across sessions using local storage

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For styling and responsive design.
- **React Router**: For routing within the application.
- **TypeScript**: For type safety.

## Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BapiMajumder1402/react-assignment.git
   cd react-assignment/client

Install dependencies:

bash
  
npm install
Create environment files:

Create an .env.development file in the client directory with the following content:

plaintext
  
VITE_API_BASE_URL=http://localhost:3000/api/v1
We can replace https://our-development-api-url.com with our actual development API URL.

Create an .env.production file in the client directory with the following content:

plaintext
  
VITE_API_BASE_URL=http://localhost:3000/api/v1
We can replace https://our-production-api-url.com with our actual production API URL.

Scripts
Development Mode: Start the development server.

bash
npm run dev
Production Build: Build the application for production.

bash
npm run build
Preview: Preview the production build locally.

bash
npm run preview
Linting: Run ESLint to check for code issues.

Start in Development Mode:
bash
npm run start:dev

Start in Production Mode:
bash
npm run start:prod

bash
npm run lint
Environment Variables
The application uses Vite's environment variables, which are prefixed with VITE_. Here's how to configure them:

VITE_API_URL: The base URL for your API. Set this in your .env.development and .env.production files.
License