import React, { useEffect, useState } from "react";
import { useUser } from "../App";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useUser();
  const [courseData, setCourseData] = useState([]);

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    console.log("Using effect.");
    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
      CourseService.get(_id)
        .then((data) => {
          setCourseData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      _id = "";
    }
    if (currentUser.user.role === "instructor") {
      CourseService.get(_id)
        .then((data) => {
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (currentUser.user.role === "student") {
      CourseService.getEnrolledCourses(_id)
        .then((data) => {
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser ? (
        <div>
          <p>You must login before seeing your courses.</p>
          <button
            onClick={handleTakeToLogin}
            className="btn btn-primary btn-lg"
          >
            Take me to login page
          </button>
        </div>
      ) : currentUser.user.role === "instructor" ? (
        <div>
          <h1>Welcome to instructor's Course page.</h1>
        </div>
      ) : currentUser.user.role === "student" ? (
        <div>
          <h1>Welcome to student's Course page.</h1>
        </div>
      ) : null}

      {currentUser && courseData.length > 0 && (
        <div>
          <p>Here's the data we got back from server.</p>
          {courseData.map((course) => (
            <div className="card" style={{ width: "18rem" }} key={course._id}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p>Student Count: {course.students.length}</p>
                <button className="btn btn-primary">{course.price}</button>
                <br />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
