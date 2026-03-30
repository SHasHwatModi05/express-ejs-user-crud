# 🚀 User Management System (Node.js, Express, EJS, MongoDB)

A full-stack **CRUD (Create, Read, Update, Delete)** web application built using Node.js and Express.  
This project demonstrates **server-side rendering with EJS** and integration with **MongoDB Atlas** for persistent data storage.

---

## 🌐 Live Demo

👉 https://express-ejs-user-crud-v646.onrender.com

---

## 📖 Overview

This application allows users to manage user records through a clean and simple interface.  
It supports creating, viewing, updating, and deleting users, along with storing profile image URLs.

The project follows a proper **MVC (Model-View-Controller) architecture** and includes **CI/CD integration using GitHub Actions**.

---

## ✨ Features

- ✅ Create new user records  
- 👀 View all users  
- ✏️ Update existing user details  
- ❌ Delete users  
- 🖼️ Store and display user profile images  
- ☁️ MongoDB Atlas cloud database integration  
- ⚙️ CI/CD pipeline using GitHub Actions  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Templating Engine:** EJS  
- **Database:** MongoDB Atlas  
- **Styling:** Tailwind CSS  
- **Version Control:** Git & GitHub  
- **CI/CD:** GitHub Actions  

---

## 📁 Project Structure (MVC)
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
├── assets/
│   └── screenshot.png
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── app.js
├── package.json
├── package-lock.json
└── .env

---

## 🔄 CI/CD Pipeline

This project uses **GitHub Actions** for automation:

- Runs on every push to `main` branch  
- Installs dependencies  
- Verifies project build  

---

## 🚀 Deployment

The application is deployed on **Render**:

- Auto-deploy enabled via GitHub  
- Updates on every push  
- Environment variables managed securely  
