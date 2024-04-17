Based on the requirements and the context you provided, here’s a README template you might use for your project. You can adjust it as needed:

```markdown
# Course Selection System (MERN Stack)

<a href="https://ibb.co/Rg57rVd"><img src="https://i.ibb.co/0nwQ4dv/21701713325680-pic.png" alt="21701713325680-pic" border="0" /></a>

This project is a course selection system built with the MERN stack: MongoDB, Express.js, React, and Node.js. It offers a platform for instructors to create and monitor course enrollments and for students to register for various courses.

## Features

- **For Instructors**: Create courses and monitor enrollment.
- **For Students**: Browse available courses and register as desired.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installing

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd <repository-name>
```

Install dependencies for the server:

```bash
cd server
npm install
```

Install dependencies for the client:

```bash
cd ..
cd src
npm install
```

### Running the application

To run both the server and client at the same time, you can use:

```bash
npm run dev
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

- The server runs on `http://localhost:5000` by default.
- The React client runs on `http://localhost:3000`.

## Built With

- [React.js](https://reactjs.org/) - The frontend framework used.
- [Express.js](https://expressjs.com/) - The backend framework used.
- [Node.js](https://nodejs.org/) - The runtime environment for backend.
- [MongoDB](https://www.mongodb.com/) - The database used.

## Authors

- Your Name

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
```

Please replace `<repository-url>`, `<repository-name>`, and `<image-path>` with the actual URL of your repository, the name of your directory, and the path to the screenshot image you've uploaded, respectively. The screenshot image can be embedded directly using a relative path to the file in your repository if you're including it in your GitHub repository. If you want to link directly to the image you've uploaded here, you'll need to serve it from a web-accessible location.

Would you like to proceed with embedding the image from the uploaded files or would you prefer to host it elsewhere?
