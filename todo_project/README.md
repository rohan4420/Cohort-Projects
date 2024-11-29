
# Todo App

This project is a simple TODO application with the following features:
- **Create a Todo**: Anyone can create a new todo.
- **View Todos**: Anyone can see their existing todos.
- **Mark as Done**: Anyone can mark a todo as done.

---

## Backend Setup

### Steps to Set Up the Backend

1. **Initialize Backend with Express**
   - Run the following commands to set up your project:
     ```bash
     npm init
     npm install express
     ```
   - Create an `index.js` file to start your backend server.

2. **Create API Endpoints**
   - Add routes for:
     - Creating a new todo.
     - Fetching existing todos.
     - Updating a todo (mark as done).

3. **Add Validation Using Zod**
   - Install `zod` for schema validation:
     ```bash
     npm install zod
     ```
   - Use Zod to validate incoming data in your API.

4. **Connect to MongoDB**
   - Install Mongoose to interact with MongoDB:
     ```bash
     npm install mongoose
     ```
   - Define a Mongoose schema and save validated data to MongoDB.

5. **Test Endpoints with Postman**
   - Use Postman to test all endpoints and verify functionality.

---

## Frontend Setup

### Steps to Set Up the Frontend

1. **Install Dependencies**
   - Run the following commands to set up your React app:
     ```bash
     npm install
     npm install cors
     ```
   - The `cors` package is required to avoid CORS errors when making API calls from the frontend.

2. **Build Frontend Features**
   - Create React components to:
     - Display a list of todos.
     - Add a new todo.
     - Mark a todo as done.

---

## Running the Application

1. **Start the Backend**
   - Run the backend server:
     ```bash
     node index.js
     ```

2. **Start the Frontend**
   - Run the React app:
     ```bash
     npm run dev
     ```

---

## Tools and Libraries Used

### Backend
- **Express**: To create the API endpoints.
- **Zod**: For data validation.
- **Mongoose**: For interacting with MongoDB.
- **Postman**: For testing the API.

### Frontend
- **React**: For building the UI.
- **CORS**: To handle CORS issues between the frontend and backend.

---
