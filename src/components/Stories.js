import React from "react";

function Stories() {
  return (
    <div className="home-stories-header">
      <div className="story">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="story pic"
        />
        <p>louis_ann</p>
      </div>
      <div className="story">
        <img
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          alt="story pic"
        />
        <p>the_rock</p>
      </div>
      <div className="story">
        <img
          src="https://netstorage-tuko.akamaized.net/images/7a260df7cd4936b4.jpg?imwidth=900"
          alt="story pic"
        />
        <p>cute_girl</p>
      </div>
      <div className="story">
        <img
          src="data:image/jpeg;base64,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"
          alt="story pic"
        />
        <p>jj_kim</p>
      </div>
      <div className="story">
        <img
          src="https://pbs.twimg.com/profile_images/1465102977312636929/oXKdq9aL_400x400.jpg"
          alt="story pic"
        />
        <p>shaundai</p>
      </div>
      <div className="story">
        <img
          src="https://cdn.lifehack.org/wp-content/uploads/2014/05/origin_277123912.jpg"
          alt="story pic"
        />
        <p>jason_pp</p>
      </div>
      <div className="story">
        <img
          src="https://www.dumbartonreporter.co.uk/resources/images/13621922/?type=og-image"
          alt="story pic"
        />
        <p>da.queen</p>
      </div>
    </div>
  );
}

export default Stories;
