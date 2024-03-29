import React, { useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home-components";
import NavComponent from "./components/nav-components";
import RegisterComponent from "./components/register-components";
import LoginComponent from "./components/login-components";
import ProfileComponent from "./components/profile-components";
import CourseComponent from "./components/course-components";
import AuthService from "./services/auth.service";
import PostCourseComponent from "./components/post-course-components";
import EnrollComponent from "./components/enroll-components";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/course" element={<CourseComponent />} />
          <Route path="/postCourse" element={<PostCourseComponent />} />
          <Route path="/enroll" element={<EnrollComponent />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
