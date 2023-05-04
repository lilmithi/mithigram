import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Stories from "./Stories";

function Home() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    async function getDetails(url) {
      const promise = await fetch(url, {
        method: "GET",
        credentials: "same-origin", //include, same-origin
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const response = await promise.json();
      return response;
    }
    getDetails("http://localhost:4000/users").then((data) => {
      setUsers(data);
    });

    const getGiphy = async () => {
      const promise = await fetch("");
      const response = await promise.json();
      // console.log(response.data);
      return response.data;
    };
    getGiphy().then((res) => {
      console.log(res.url);
      setData(res);
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
      {data.url && <img src={data.url} alt={data.slug} />}
      <Stories />
      <div className="card-section">
        <Card users={displayedPosts} />
      </div>
    </div>
  );
}

export default Home;
