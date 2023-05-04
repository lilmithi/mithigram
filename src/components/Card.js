import React from "react";

function Card({ users }) {
  function patchLikes(e, userId, postId, user) {
    addLikes(`http://localhost:4000/users/${userId}`).then((resp) => {
      console.log(resp);
      // eslint-disable-next-line
      user.postAddress.map((requiredPost) => {
        if (`${requiredPost.id}likes` === postId) {
          document.getElementById(
            postId
          ).textContent = `${requiredPost.likes} likes`;
          e.target.style.color = "red";
        }
      });
    });
    async function addLikes(url) {
      const promise = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          postAddress: user.postAddress.map((post) => {
            if (`${post.id}likes` === postId) {
              post.likes += 1;
            }

            return post;
          }),
        }),
      });
      const response = await promise.json();
      return response;
    }
  }
  function handleComments(userId, postId, commentDiv, user) {
    const inputComment = document.getElementById(postId).value;
    const commentsContainer = document.getElementById(commentDiv);
    addComments(`http://localhost:4000/users/${userId}`).then((resp) => {
      // eslint-disable-next-line
      user.postAddress.map((requiredPost) => {
        if (`${requiredPost.id}comment` === postId) {
          const commentsLength = requiredPost.comments.length;
          const newComment = document.createElement("p");
          newComment.className = "comment";
          newComment.textContent = requiredPost.comments[commentsLength - 1];
          commentsContainer.appendChild(newComment);
          document.getElementById(postId).value = "";
        }
      });
    });
    async function addComments(url) {
      const promise = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          postAddress: user.postAddress.map((post) => {
            if (`${post.id}comment` === postId) {
              post.comments = [...post.comments, inputComment];
            }
            return post;
          }),
        }),
      });
      const response = await promise.json();
      return response;
    }
  }

  const renderPosts = users.map((user) => {
    return user.postAddress.map((post, index) => {
      return (
        <div className="card-container" key={index}>
          <div className="card-title">
            <img src={user.profileImg} alt="profile pic" />
            <p className="title-actual">{user.userName}</p>
          </div>

          <div className="card-image">
            <img src={post.imgAddress} alt="post pic" />
          </div>
          <div className="like">
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings:
                  "'FILL' 1, 'wght' 400, 'GRAD' 0,'opsz' 48",
              }}
              onClick={(e) => patchLikes(e, user.id, `${post.id}likes`, user)}
            >
              favorite
            </span>
            <p className="like-count" id={`${post.id}likes`}>
              {post.likes} likes
            </p>
          </div>
          <div className="comments">
            <div className="comments-title">Comments</div>
            <div className="commentdiv">
              <input
                type="text"
                placeholder="Add comment"
                className="comment-input"
                id={`${post.id}comment`}
              />
              <button
                type="button"
                onClick={() =>
                  handleComments(
                    user.id,
                    `${post.id}comment`,
                    `${post.id}commentDiv`,
                    user
                  )
                }
                className="comment-btn"
              >
                Add Comment
              </button>
            </div>
            <div className="actualCommentsDiv" id={`${post.id}commentDiv`}>
              {post.comments.map((comment, index) => {
                return (
                  <p className="comment" key={index}>
                    {comment}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  });
  return renderPosts;
}

export default Card;
