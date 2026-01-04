# JWT Authentication Service 

Project Description: A robust and secure back-end authentication system built with **Nest.js**. This project demonstrates best practices for user security, session management, and protecting routes using industry-standard JWT (JSON Web Tokens).



## 🛠 Technologies Used:

- **Nest.js** — building a scalable and modular server-side application.
- **Passport.js** — implementing authentication strategies.
- **JWT** — secure transmission of information between parties.
- **PostgreSQL & PrismaORM** — reliable data storage and management.
- **Argon2** — secure password hashing and protection.



## ✨ Key Features:

- **Dual-Token System:** Implements a secure Access and Refresh token logic to manage user sessions efficiently.
- **Route Protection:** Uses custom Guards to restrict access to sensitive API endpoints based on authentication status.
- **Secure Password Management:** All passwords are encrypted using **Argon2** hashing before being saved to the database.
- **Automated Validation:** Features a strict data validation layer using `class-validator`.
- **Modular Architecture:** Organized into decoupled modules, easy to integrate into microservices.



## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/syf3rr/jwt-auth.git
```
```bash
cd jwt-auth
```
  
##

### 2. Install dependencies
```bash
npm install
```

##

### 3. Environment Variables
- Create a .env file in the root directory and add your configuration (see .env.example for details):

```bash
NODE_ENV="development"
COOKIE_DOMAIN="localhost"

JWT_SECRET="your_jwt_secret"
JWT_ACCESS_TOKEN_TTL="2h"
JWT_REFRESH_TOKEN_TTL="7d"

DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

##

### 4. Run the application
```bash
npm run start:dev
```
