import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers("http://localhost:4000/users").then((resp) => {
      setUsers(resp);
    });
    async function getUsers(url) {
      const promise = await fetch(url);
      const response = await promise.json();
      return response;
    }
    document.getElementById("searchBar").disabled = true;
  }, []);
  const renderUsers = users.map((user, index) => {
    return (
      <div className="profile-container" key={index}>
        <div className="profile-picture">
          <img src={user.profileImg} alt="profile pic" />
        </div>
        <div className="profile-name">{user.userName}</div>
        <div className="follow-container">
          <div className="followers-container">
            <div className="followers-title">Followers</div>
            <div className="followers">{user.followers}</div>
          </div>
          <div className="following-container">
            <div className="following-title">Following</div>
            <div className="following">{user.following}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Navbar />
      <div className="profile-section">{renderUsers}</div>
    </>
  );
}

export default Profile;
