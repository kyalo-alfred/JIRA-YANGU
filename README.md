# JIRA YANGU

A website based on helping to solve the issue of unemployment and poverty in Kenya.

---

## Project Overview
JiraYangu is a modern, full-stack web application built to provide career development and economic empowerment tools. The platform features a Job Board, Courses & CV Builder, Marketplace with M-Pesa Escrow, and Mentorship & Reports, all accessible through a clean, modular, and maintainable React frontend.

## Migration: From Static HTML to React
Originally, the project used static HTML and CSS files for each page. To modernize the codebase and enable a scalable, maintainable, and interactive user experience, the frontend was rebuilt using React (JavaScript):

- **Component-Based Structure:** Each feature (Job Board, Courses, Marketplace, Mentorship, Profile) is now a React component or page, making the code modular and reusable.
- **Routing:** React Router is used for seamless navigation between pages, replacing static HTML links.
- **State Management:** React's state and context APIs manage user authentication, interactivity, and data flow.
- **Styling:** Modern CSS (with gradients, shadows, and responsive layouts) replaces old static styles, providing a consistent and visually appealing UI.
- **Mock Data:** During frontend development, mock data and interactivity were used to simulate real features before backend integration.

## How JavaScript and React Work in This Project
- **JavaScript** is the core programming language, powering all logic, interactivity, and data handling in the frontend.
- **React** is a JavaScript library for building user interfaces. It allows the UI to be broken into components, each managing its own state and rendering efficiently when data changes.
- **React Context** is used for global state, such as authentication (login/logout, user info), so all parts of the app can access user state.
- **Protected Routes:** Only logged-in users can access main features. React Router and context work together to redirect unauthenticated users to the login page.
- **Dynamic UI:** Buttons, forms, and modals update in real time based on user actions, thanks to React's state system.

## Frontend Structure
```
client/
  src/
    assets/css/         # Modern CSS for each feature
    components/         # Shared UI components (Header, Footer, Layout, AuthContext)
    pages/              # Main feature pages (Homepage, JobBoard, Courses, Marketplace, Mentorship, Profile, Login, Signup)
    api/                # (For future backend integration)
    App.js              # Main app, routing, and context
    index.js            # Entry point
```

## Authentication Flow
- **Sign Up / Login:** Users must log in to access features. After login, the navbar shows the user's profile and logout option.
- **Profile Management:** Users can edit their profile info and upload a profile picture.
- **Protected Features:** All main pages are protected; unauthenticated users are redirected to login.

## UI/UX Highlights
- **Responsive Design:** Works on desktop and mobile.
- **Consistent Buttons:** All main actions use a unified button style.
- **Marketplace Grid:** Products are shown in a modern grid with images.
- **Navigation:** Clean navbar with active state, profile avatar, and logout.

## How to Run
1. Install dependencies: `npm install` in the client directory.
2. Start the frontend: `npm start` in the client directory.
3. (Backend integration coming soon.)

---
