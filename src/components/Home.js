import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Stories from "./Stories";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getDetails(url) {
      const promise = await fetch(url);
      const response = await promise.json();
      return response;
    }
    getDetails("http://localhost:3000/users").then((data) => {
      setUsers(data);
    });
  }, []);
  function handleSearch(search) {
    setSearch(search); 
  } 
  const displayedPosts = users.filter((user) =>
    user.userName.toLowerCase().includes(search.toLowerCase())
  );   
 
  return ( 
    <div className="home-main">
      <Navbar handleSearch={handleSearch} />
      <Stories />
      <div className="card-section">
        <Card users={displayedPosts} />
      </div>
    </div>
  );
}

export default Home;
