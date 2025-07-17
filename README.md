# Task Manager API

A robust, production-ready RESTful API for managing tasks and users, built with Node.js, Express, and MongoDB. This project demonstrates advanced backend engineering skills, including authentication, file uploads, email notifications, and secure data handling.

---

## Features

- **User Authentication & Authorization**
  - JWT-based authentication with secure password hashing using bcrypt.
  - Middleware to protect private routes.
  - Support for login, logout (single session and all sessions), and user profile management.

- **Task Management**
  - CRUD operations for tasks, each associated with a user.
  - Filtering, pagination, and sorting for task queries.
  - Cascade deletion: user deletion removes all their tasks.

- **File Uploads**
  - Upload, retrieve, and delete user avatars.
  - Image processing with sharp (resize and format conversion).

- **Email Notifications**
  - Welcome and cancellation emails sent via SendGrid on user registration and deletion.

- **Robust Validation**
  - Input validation for user and task data using validator and Mongoose schema validation.

- **Modern JavaScript**
  - Async/await and promise chaining patterns.
  - Modular, maintainable code structure.

---

## Project Structure

```
.
├── .gitignore
├── package.json
├── promise-chaining.js
└── src
    ├── db
    │   └── mongoose.js
    ├── emails
    │   └── account.js
    ├── index.js
    ├── middleware
    │   └── auth.js
    ├── models
    │   ├── task.js
    │   └── user.js
    └── routers
        ├── task.js
        └── user.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)
- [SendGrid](https://sendgrid.com/) account for email notifications

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ali-roshanbin/task-manager.git
   cd task-manager
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` or `config/dev.env` file with the following:

   ```
   PORT=3000
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. **Start the server:**
   ```sh
   npm run dev
   ```
   The server will run on `http://localhost:3000`.

---

## API Endpoints

### User

- `POST /users` - Register a new user
- `POST /users/login` - Login
- `POST /users/logout` - Logout from current session
- `POST /users/logoutAll` - Logout from all sessions
- `GET /users/me` - Get current user profile
- `PATCH /users/me` - Update user profile
- `DELETE /users/me` - Delete user account
- `POST /users/me/avatar` - Upload avatar (image)
- `DELETE /users/me/avatar` - Delete avatar
- `GET /users/:id/avatar` - Get user avatar

### Task

- `POST /tasks` - Create a new task
- `GET /tasks` - Get all tasks (supports filtering, pagination, sorting)
- `GET /tasks/:id` - Get a specific task
- `PATCH /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

#### Task Query Parameters

- `completed=true|false` - Filter by completion status
- `limit=10` - Limit number of results
- `skip=20` - Skip number of results (for pagination)
- `sortBy=createdAt:desc` - Sort by field and order

---

## Code Highlights

- **Authentication Middleware:**  
  See `src/middleware/auth.js` for JWT-based route protection.

- **User Model with Virtuals and Methods:**  
  See `src/models/user.js` for advanced Mongoose schema usage, including virtual relationships, custom instance/static methods, and middleware.

- **Task Model:**  
  See `src/models/task.js` for task schema and user association.

- **Email Integration:**  
  See `src/emails/account.js` for SendGrid email logic.

- **Promise Chaining & Async/Await Examples:**  
  See `promise-chaining.js` for different async patterns.

---

## Example: Register & Authenticate

```http
POST /users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "SuperSecret123"
}
```

Response:
```json
{
  "user": {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 0,
    "_id": "..."
  },
  "token": "..."
}
```

---

## Security & Best Practices

- Passwords are hashed before storage.
- JWT tokens are stored per session for multi-device support.
- Sensitive fields (password, tokens, avatar) are omitted from API responses.
- Only authenticated users can access or modify their own data.
- File uploads are validated and processed securely.

---

## License

This project is licensed under the ISC License.

---

## 🧑‍💻 Author

- **Ali Roshanbin**  
  [GitHub](https://github.com/ali-roshanbin) | [GitLab](https://gitlab.com/ali.roshanbin) | [LinkedIn](https://linkedin.com/in/roshanbin)

---

## Contact

For any questions or feedback, please open an issue or contact me via email.
