# Express User Management API

This is a simple Express server for user management, including registration and login functionality. The API allows users to create accounts, log in, and delete their accounts.

## Features

- User registration
- User login
- User deletion

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- dotenv for environment variable management
- cors for handling Cross-Origin Resource Sharing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (running instance or MongoDB Atlas account)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Install dependencies:

bash
 
npm install
Create a .env file in the root directory and add your environment variables:


PORT=3000
CORS=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
Running the Server
Start the server with the following command:

bash
 
npm run dev
The server will listen on the port specified in your .env file (default is 3000).

API Endpoints
Register User
Endpoint: POST /api/v1/user/register
Request Body:
json
 
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
Response:
Status: 201 Created
Body:
json
 
{
  "status": 200,
  "data": {
    "_id": "userId",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "message": "Successfully registered"
}
Login User
Endpoint: POST /api/v1/user/login
Request Body:
json
 
{
  "email": "john@example.com"
}
Response:
Status: 200 OK
Body:
json
 
{
  "status": 200,
  "message": "Successfully logged in"
}
Delete User
Endpoint: DELETE /api/v1/user/:userId
URL Params:
userId: ID of the user to delete
Response:
Status: 200 OK
Body:
json
 
{
  "status": 200,
  "message": "User deleted successfully"
}