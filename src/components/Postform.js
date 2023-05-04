import React, { useEffect } from "react";
import Navbar from "./Navbar";
function Postform() {
  useEffect(() => {
    document.getElementById("searchBar").disabled = true;
  }, []);
  function handleFormPost(e) {
    e.preventDefault();
    const generateId = function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    };
    const randomFollowers = Math.floor(Math.random() * 100000 + 1);
    const randomFollowing = Math.floor(Math.random() * 100000 + 1);
    const userName = document.getElementById("postUserName").value;
    const profileAddress = document.getElementById("profileImageAddress").value;
    const postAddress = document.getElementById("postImageAddress").value;
    postForm("http://localhost:4000/users").then((resp) => {
      console.log("resp: ", resp);
    });
    async function postForm(url) {
      const promise = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          profileImg: profileAddress,
          postAddress: [
            {
              id: generateId(),
              imgAddress: postAddress,
              likes: 0,
              comments: [],
            },
          ],
          followers: randomFollowers,
          following: randomFollowing,
        }),
      });
      const response = await promise.json();
      return response;
    }
    document.getElementById("postForm").reset();
  }
  return (
    <>
      <Navbar />
      <div className="post-main">
        <div className="post-form">
          <div className="post-form-title">
            <span>Mithi</span>gram
          </div>
          <form id="postForm" onSubmit={(e) => handleFormPost(e)}>
            <div className="formLabelsInputs">
              <div className="postUserNameDiv">
                <label htmlFor="postUserName">Username</label>
                <input
                  type="text"
                  id="postUserName"
                  required
                  minLength={5}
                  maxLength={12}
                />
              </div>
              <div className="profileImageAddressDiv">
                <label htmlFor="profileImageAddress">
                  Profile Image address
                </label>
                <input
                  type="text"
                  id="profileImageAddress"
                  required
                  minLength={5}
                />
              </div>
              <div className="postImageAddressDiv">
                <label htmlFor="postImageAddress">Post Image Address</label>
                <input
                  type="text"
                  id="postImageAddress"
                  required
                  minLength={5}
                />
              </div>
              <div className="btn-container">
                <button type="submit" id="post-submit-btn">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Postform;
