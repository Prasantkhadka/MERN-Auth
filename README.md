# MERN Authentication API

This is a backend API built with Node.js, Express, and MongoDB that provides user authentication and management functionality for a MERN stack application. It supports signup, login, and user data operations, with security features like JWT-based authentication and cookie management.

# Features

--> User Authentication: Secure signup and login using JWT tokens.

--> Protected Routes: Only authenticated users can access user-related endpoints.

--> CORS Enabled: Configured to work with a frontend running on http://localhost:5173.

--> Cookie Handling: Cookies are used to manage session credentials.

--> MongoDB Integration: Stores user data securely using Mongoose ODM.

--> Environment Variables: Uses .env for sensitive configuration like DB connection string and JWT secret.

# Tech Stack

--> Node.js & Express – Backend framework.

--> MongoDB & Mongoose – Database and ODM for data modeling.

--> JWT – For authentication.

--> CORS – To connect with frontend apps.

--> cookie-parser – For handling cookies.

--> dotenv – To manage environment variables.
