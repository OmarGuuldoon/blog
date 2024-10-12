# Blog System Backend

This project is a complete backend for a **Blog System** that provides full functionality through RESTful APIs. It includes user authentication, role-based authorization, post and comment management, and admin reporting features. The backend is built using Node.js, Express, Sequelize (for MySQL), and JWT for secure authentication.

## Features

### 1. User Management
- **User Authentication**: Users can sign up, log in, and log out securely.
- **Roles and Permissions**: Role-based access control with admin and regular user roles.
  
### 2. Blog Post Management
- **Create, Read, Update, and Delete (CRUD)**: Users can create blog posts, read posts, update their posts, and delete them if needed.
- **Image Support**: Posts can include images via the `image_url` field.

### 3. Comment Management
- **CRUD for Comments**: Users can comment on blog posts and manage their comments (create, edit, delete).
  
### 4. Reporting for Admins
- **Post Reports**: Admins can filter posts by date range, user, category, and most popular posts.
- **Comment Reports**: Admins can filter comments by post ID, date range, user, and flagged comments.
- **User Reports**: Admins can monitor user registrations and filter users by active/inactive status.
- **Contact Us Reports**: Admins can generate reports based on the contact form inquiries, filtering by date range and response status.
- **Custom Reports**: Admins can create custom reports by applying various filters to retrieve specific data.

### 5. Secure Access
- **JWT-based Authentication**: The application uses JWT (JSON Web Token) to authenticate users securely.
- **Session Management**: Sessions are managed for users to ensure safe operations within the system.

### 6. RESTful API
- The project exposes a RESTful API to interact with the application. This allows users and admins to perform various actions on posts, comments, and reports through HTTP methods like `GET`, `POST`, `PUT`, and `DELETE`.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for building REST APIs.
- **Sequelize**: ORM for MySQL to manage models and relationships.
- **JWT**: Token-based authentication for user sessions.
- **Bcrypt**: For password hashing and secure authentication.
- **MySQL**: Database for storing user, post, comment, and report data.

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/blog-system-backend.git
