# User Management System (Node.js, Express, EJS, MongoDB)

A full-stack CRUD (Create, Read, Update, Delete) web application built using Node.js and Express.
This project demonstrates server-side rendering with EJS and integration with MongoDB Atlas for persistent data storage.

---

## 🌐 Live Demo

https://express-ejs-user-crud-v646.onrender.com

---

## Overview

This application allows users to manage user records through a simple interface. It supports creating, viewing, updating, and deleting users, along with storing profile image URLs.

The project follows basic MVC architecture and includes CI/CD integration using GitHub Actions.

---

## Features

* Create new user records
* View all users
* Update existing user details
* Delete users
* Store and display user profile images
* MongoDB Atlas cloud database integration
* CI/CD pipeline using GitHub Actions

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Templating Engine:** EJS
* **Database:** MongoDB Atlas
* **Styling:** Tailwind CSS
* **Version Control:** Git & GitHub
* **CI/CD:** GitHub Actions

---

## Project Structure

```id="q7w2df"
├── models/
│   └── user.js
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   └── edit.ejs
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── app.js
├── package.json
├── package-lock.json
└── .env
```

---

## CI/CD Pipeline

This project uses GitHub Actions to automate the build process.

* Triggered on every push to the main branch
* Installs dependencies
* Verifies application setup

---

## Deployment

The application is deployed on Render and automatically updates on every push via GitHub integration.

---

## Learning Outcomes

* Implemented RESTful CRUD operations
* Integrated MongoDB Atlas with Node.js
* Used EJS for server-side rendering
* Set up CI/CD using GitHub Actions
* Managed environment variables securely
