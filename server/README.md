# Server for User Management Application

## Description

This is the backend server for a user management application built with Node.js and Express. It provides RESTful API endpoints to manage user registration, login, updating, deleting, and retrieving user data.

## Features

- User registration
- User login
- Update user details
- Delete user
- Retrieve user information

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Async Handler**: Middleware for handling asynchronous requests.
- **Custom Error and Response Handling**: Standardized error and response structure.

## Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X)
- MongoDB Atlas account (for MongoDB URI)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BapiMajumder1402/react-assignment.git
   cd react-assignment/server
Install dependencies:

bash
  
npm install
Create a .env file in the server directory with the following content:

plaintext
  
PORT=3000
CORS=*
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.rmlb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
Make sure to replace <username> and <password> with your actual MongoDB credentials.
or 
use my mongodb uri
MONGODB_URI=mongodb+srv://bapi:bapi123456@cluster0.rmlb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Start the server:
bash
  
npm run dev
The server will run on http://localhost:3000.

API Endpoints
User Registration
Endpoint: /api/users/register
Method: POST
Request Body:
json
  
{
    "name": "User Name",
    "email": "user@example.com",
    "age": 30
}
Responses:
201 Created: User successfully registered.
400 Bad Request: Name and email are required.
409 Conflict: User already exists.
User Login
Endpoint: /api/users/login
Method: POST
Request Body:
json
  
{
    "email": "user@example.com"
}
Responses:
200 OK: Successfully logged in.
400 Bad Request: Email is required.
401 Unauthorized: Account not found.
Update User
Endpoint: /api/users/:userId
Method: PUT
Request Body:
json
  
{
    "name": "New User Name",
    "email": "newuser@example.com",
    "age": 31
}
Responses:
200 OK: User updated successfully.
400 Bad Request: User ID is required.
404 Not Found: User not found.
Delete User
Endpoint: /api/users/:userId
Method: DELETE
Responses:
200 OK: User deleted successfully.
400 Bad Request: User ID is required.
404 Not Found: User not found.
Get User
Endpoint: /api/users/:userId
Method: GET
Responses:
200 OK: User retrieved successfully.
400 Bad Request: User ID is required.
404 Not Found: User not found.