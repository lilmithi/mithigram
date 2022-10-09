import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar({ handleSearch }) {
  return (
    <>
      <div className="home-header">
        <NavLink
          exact
          to="/"
          className="home-title"
          style={{ textDecoration: "none" }}
          title="Mithigram"
        >
          Mithigram
        </NavLink>
        <Search handleSearch={handleSearch} />
        <NavLink
          exact
          to="/"
          className="home-png"
          style={{ textDecoration: "none" }}
          activeStyle={{
            borderBottom: "solid 4px rgba(165, 42, 42, 0.808)",
          }}
          title="Home"
        >
          <span className="material-symbols-outlined">home</span>
        </NavLink>
        <NavLink
          exact
          to="/postform"
          className="post-png"
          style={{ textDecoration: "none" }}
          activeStyle={{ borderBottom: "solid 4px rgba(165, 42, 42, 0.808)" }}
          title="Add post"
        >
          <span className="material-symbols-outlined"> add_box </span>
        </NavLink>
        <NavLink
          exact
          to="/explore"
          className="explore-png"
          style={{ textDecoration: "none" }}
          activeStyle={{ borderBottom: "solid 4px rgba(165, 42, 42, 0.808)" }}
          title="Explore"
        >
          <span className="material-symbols-outlined"> explore </span>
        </NavLink>
        <NavLink
          exact
          to="/profile"
          className="home-profile-png"
          style={{ textDecoration: "none" }}
          title="Profile"
          activeStyle={{
            borderBottom: "solid 4px rgba(165, 42, 42, 0.808)",
          }}
        >
          <img
            src="https://previews.123rf.com/images/jegas/jegas1610/jegas161000451/67827303-human-head-silhouette-face-profile-view-elegant-silhouette-of-part-of-human-face-vector-illustration.jpg"
            alt="profile pic"
          />
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
