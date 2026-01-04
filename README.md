## JWT Authentication Service


Project Description:
Project Description: A robust and secure back-end authentication system built with Nest.js. This project demonstrates best practices for user security, session management, and protecting routes using industry-standard JWT (JSON Web Tokens).

## Technologies Used:
  - Nest.js (for building a scalable and modular server-side application)
  - Passport.js (for implementing authentication strategies)
  - JWT (for secure transmission of information between parties as a JSON object)
  - PostgreSQL & PrismaORM (for reliable data storage and management)
  - Argon2 (for secure password hashing and protection)

## Key Features:
  - Dual-Token System: Implements a secure Access and Refresh token logic to manage user sessions efficiently.
  - Route Protection: Uses custom Guards to restrict access to sensitive API endpoints based on authentication status.
  - Secure Password Management: All passwords are encrypted using Hash techniques before being saved to the database.
  - Automated Validation: Features a strict data validation layer using class-validator to ensure all incoming requests are properly formatted.
  - Modular Architecture: The system is organized into decoupled modules, making it easy to integrate into any existing microservice or monolith system.



## ⚙️ Installation & Setup
1. **Clone the repository:**
   git clone https://github.com/syf3rr/jwt-auth.git
   cd your-repo-name
2. **Install dependencies:**
   npm install
3. **Environment Variables: Create a .env file in the root directory and add your configuration (see .env.example):**
   NODE_ENV="development"
   COOKIE_DOMAIN="localhost"
   JWT_SECRET="your_jwt_secret" example: "1982cfbec240263222e59ad6d0ca2f6510238fd3b77dc24535a710d23b20336077d4c7e4042d0bc5b120a702600def34ba7a258169a38f673163c49c844a1147"
   JWT_ACCESS_TOKEN_TTL="your_value" example: "2h"
   JWT_REFRESH_TOKEN_TTL="your_value" example: "7d"
   DATABASE_URL="your_url" example: "postgresql://user:password@localhost:5432/mydb"
4. **Run the application:**
   npm run start:dev
