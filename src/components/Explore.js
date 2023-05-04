import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Explore() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages("http://localhost:4000/users").then((resp) => {
      const imageArr = resp.map((user) => {
        return user.postAddress.map((post) => post.imgAddress);
      });
      setImages(() => imageArr);
    });
    async function getImages(url) {
      const promise = await fetch(url);
      const response = await promise.json();
      return response;
    }
    document.getElementById("searchBar").disabled = true;
  }, []);
  const renderImages = images.map((pic) => {
    return pic.map((picture, index) => {
      return (
        <div className="imageDiv" key={index}>
          <img src={picture} alt="post pic" />
        </div>
      );
    });
  });
  return (
    <>
      <Navbar />
      <div className="grid-container">{renderImages}</div>
    </>
  );
}

export default Explore;
