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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

Please replace `<repository-url>`, `<repository-name>`, and `<image-path>` with the actual URL of your repository, the name of your directory, and the path to the screenshot image you've uploaded, respectively. The screenshot image can be embedded directly using a relative path to the file in your repository if you're including it in your GitHub repository. If you want to link directly to the image you've uploaded here, you'll need to serve it from a web-accessible location.

Would you like to proceed with embedding the image from the uploaded files or would you prefer to host it elsewhere?
