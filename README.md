SHOP-EZ: Complete Full-Stack E-commerce Platform

Welcome to SHOP-EZ, a fully functional e-commerce application built using a modern development stack. The system includes a React-based frontend and a Node.js backend for managing products, users, orders, and payments.

Technology Stack

Frontend

React

Vite

Tailwind CSS v4

Framer Motion

Backend

Node.js

Express.js

MongoDB

Requirements

Before running the project, make sure the following tools are installed:

Node.js (version 18 or higher)

MongoDB (Local installation or MongoDB Atlas connection)

Razorpay Account (optional – required only for payment integration)

Running the Project Locally

To start the application on your system, two services must run simultaneously.

It is recommended to open two separate terminal windows.

1. Database Configuration

Ensure that MongoDB is running on your system or that you have a valid MongoDB Atlas connection URI available.

2. Backend Setup

Open a terminal and navigate to the backend folder:

cd backend

Install all required dependencies:

npm install

Create an .env file inside the backend directory and add the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Razorpay credentials (optional)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

Start the backend server:

npm run dev

The backend server will run at:

http://localhost:5000
3. Frontend Setup

Open another terminal and navigate to the frontend folder:

cd frontend

Install frontend dependencies:

npm install

Create an .env file inside the frontend directory and define the API endpoint:

VITE_API_URL=http://localhost:5000/api

Start the frontend development server:

npm run dev

The frontend application will run at:

http://localhost:5173
4. Using the Application

After starting both Backend and Frontend services, open your browser and visit:

http://localhost:5173

You can now explore the SHOP-EZ e-commerce platform, browse products, add items to the cart, and place orders.
