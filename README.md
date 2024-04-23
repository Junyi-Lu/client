# Course Selection System (MERN Stack)

<a href="https://ibb.co/Rg57rVd"><img src="https://i.ibb.co/0nwQ4dv/21701713325680-pic.png" alt="21701713325680-pic" border="0" /></a>

This project is a course selection system built with the MERN stack: MongoDB, Express.js, React, and Node.js. It offers a platform for instructors to create and monitor course enrollments and for students to register for various courses.

## Features

- **For Instructors**: Create courses and monitor enrollment.
- **For Students**: Browse available courses and register as desired.


### Running the application

To run both the server and client at the same time, you can install:

For the frontend client alone:

```bash
npm install axios
```
For the backend server alone:
```bash
cd server
npm install bcrypt cors dotenv express joi jsonwebtoken mongoose nodemon passport passport-jwt passport-local
```


Make sure to create a script named `dev` in your `package.json` that starts both the server and client. You can use `concurrently` or similar tools for this purpose.

For the backend server alone:

```bash
cd server
npm start
```

For the frontend client alone:

```bash
cd src
npm start
```

## Usage

- The React client runs on `http://localhost:8080`.

## Built With

- [React.js](https://reactjs.org/) - The frontend framework used.
- [Express.js](https://expressjs.com/) - The backend framework used.
- [Node.js](https://nodejs.org/) - The runtime environment for backend.
- [MongoDB](https://www.mongodb.com/) - The database used.

## Authors

- Andre Lu

