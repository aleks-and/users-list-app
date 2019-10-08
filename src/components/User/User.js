import React from 'react';

const User = ({
  user: {
    avatar,
    first_name
  }
}) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img src={avatar} alt=""></img>
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{first_name}</p>
          <a href="/#">more info</a>
        </div>
      </div>
    </div>
  </div>
);

export default User;
