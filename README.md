JWT Authentication Service
Project Description: A robust and secure back-end authentication system built with Nest.js. This project demonstrates best practices for user security, session management, and protecting routes using industry-standard JWT (JSON Web Tokens).

Technologies Used:

Nest.js (for building a scalable and modular server-side application)

Passport.js (for implementing authentication strategies)

JWT (for secure transmission of information between parties as a JSON object)

PostgreSQL & PrismaORM (for reliable data storage and management)

Argon2 (for secure password hashing and protection)

Key Features:

Dual-Token System: Implements a secure Access and Refresh token logic to manage user sessions efficiently.

Route Protection: Uses custom Guards to restrict access to sensitive API endpoints based on authentication status.

Secure Password Management: All passwords are encrypted using Salt and Hash techniques before being saved to the database.

Automated Validation: Features a strict data validation layer using class-validator to ensure all incoming requests are properly formatted.

Modular Architecture: The system is organized into decoupled modules, making it easy to integrate into any existing microservice or monolith system.
