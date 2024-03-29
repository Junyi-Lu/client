import React from "react";
import { useUser } from "../App";

const ProfileComponent = () => {
  let { currentUser } = useUser();
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      {!currentUser && (
        <div> You must login first before getting your profile.</div>
      )}
      {currentUser && (
        <div>
          <h1>In profile page.</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>ID: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>EMAIL: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
