**Hospital API Readme**

This repository contains the code for a Hospital API, which provides various endpoints to manage patient and doctor data, as well as retrieve reports based on their status.

**Setup**

1. Clone the repository to your local machine.

2. Install Node.js and MongoDB if you haven't already.

3. Navigate to the project directory in the terminal.

4. Install the required dependencies by running the following command:
   ```
   npm install
   ```

5. Create a MongoDB database with the name "HospitalApi99" or modify the connection URL in "config/mongoose.js" to use your desired database.

6. Start the server by running the command:
   ```
   node index.js
   ```

   The server should now be running on http://localhost:5000 or the port specified in the environment variable "PORT".

**API Endpoints**

1. **Welcome Route**
   - `GET /`
   - Description: This route returns a simple "Welcome to Hospital API" message.
   - Response: "Hello"

2. **Patient Routes**
   - `GET /api/patients`
   - Description: Get all patients.
   - Response: Array of patient objects.

   - `POST /api/patients/register`
   - Description: Register a new patient. (Requires JWT authentication)
   - Request Body: { name, age, gender, address, phone }
   - Response: New patient object.

   - `POST /api/patients/:id/create_report`
   - Description: Create a medical report for a specific patient. (Requires JWT authentication)
   - Request Body: { status, doctor, details }
   - Response: New medical report object.

   - `GET /api/patients/:id/all_reports`
   - Description: Get all medical reports for a specific patient. (Requires JWT authentication)
   - Response: Array of medical report objects.

3. **Doctor Routes**
   - `GET /api/doctors`
   - Description: Get all doctors.
   - Response: Array of doctor objects.

   - `POST /api/doctors/register`
   - Description: Register a new doctor.
   - Request Body: { name, age, gender, address, phone, specialization }
   - Response: New doctor object.

   - `POST /api/doctors/login`
   - Description: Doctor login.
   - Request Body: { phone }
   - Response: JSON web token (JWT) for authentication.

4. **Report Routes**
   - `GET /api/reports/:status`
   - Description: Get all reports with a specific status. (Requires JWT authentication)
   - Response: Array of report objects.

**Authentication**

- The API uses JSON Web Tokens (JWT) for authentication.
- To access protected routes (e.g., patient registration, report creation, report retrieval by status), include the JWT in the "Authorization" header of the request using the "Bearer" scheme.

**Dependencies**

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- Passport: Authentication middleware for Node.js.
- Passport-JWT: Passport strategy for authenticating with a JSON Web Token.

**Database**

- The API uses MongoDB as the database to store patient, doctor, and report data.
- Ensure you have MongoDB installed and running locally or provide the appropriate connection URL.

**Note**

This readme provides a brief overview of the Hospital API and its endpoints. For more detailed documentation, you can explore the codebase and individual route handlers in the "routes" and "controllers" directories. Additionally, consider adding more error handling, validation, and security measures to make the API production-ready.
