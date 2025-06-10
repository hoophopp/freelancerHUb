# 🚀 Freelancer Hub API

Hey there! 🙌 I'm **Nermine**, and this is my fully functional **RESTful API** built for a freelancing platform where **clients** can post jobs and **freelancers** can apply, communicate, and grow! 💼✨

This project is built using **Node.js**, **Express**, and **MongoDB**, and it’s a core part of my journey to mastering **JavaScript and backend development** before diving into freelance work. Let’s gooo! 🦾

---

## 🌟 Features

### 🔐 Authentication & User Management
- `POST /register` – Register as a freelancer or client
- `POST /login` – Secure login with JWT
- `GET /users/:id` – View user profile
- `PUT /users/:id` – Update user profile
- `DELETE /users/:id` – Delete account

### 🧾 Job Listings
- `POST /jobs` – Clients post job listings
- `GET /jobs` – Anyone can browse jobs
- `GET /jobs/:id` – Get detailed job info
- `PUT /jobs/:id` – Edit posted job
- `DELETE /jobs/:id` – Delete job listing

### 📄 Applications
- `POST /jobs/:id/apply` – Freelancers apply to jobs
- `GET /applications/:id` – View application
- `DELETE /applications/:id` – Withdraw application

### 💬 Messaging 
- `POST /messages` – Send a message
- `GET /messages?userId=123` – Get all messages for a user

### ⭐ Reviews 
- `POST /users/:id/review` – Write a review
- `GET /users/:id/reviews` – View reviews for a user

---

## 📁 Project Structure

│
├── controllers/ # Logic for routes (auth, jobs, users, etc.)
│ ├── authController.js
│ ├── userController.js
│ ├── jobController.js
│ ├── applicationController.js
│ └── messageController.js
│
├── data
│ ├── User.json
│ ├── Job.json
│ ├── Application.json
│ └── Message.json
│
├── routes/ # API route definitions
│ ├── authRoutes.js
│ ├── userRoutes.js
│ ├── jobRoutes.js
│ ├── applicationRoutes.js
│ └── messageRoutes.js
│
├── middleware/ # Auth & error handling
│ ├── authMiddleware.js
│ └── errorHandler.js
│
├── utils/ # Utility functions
│ └── storage.js # Local or cloud file storage utilities
│
├── config.js # Configuration (DB, env)
├── app.js # Express app setup
├── server.js # Starts the server
└── package.json # With "type": "module"
