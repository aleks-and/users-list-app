import React from 'react';
import { connect } from 'react-redux';

const UserDetails = ({
  match: {
    params: {
      userId
    }
  },
  users
}) => {
  const [{
    avatar, 
    id, 
    first_name, 
    last_name, 
    email
  }] = users.filter(user => String(user.id) === userId);

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img className="is-rounded" src={avatar} alt=""></img>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{`${first_name} ${last_name}`}</p>
            <p className="subtitle is-6">{email}</p>
            <p className="title">{`#${id}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  mapStateToProps
)(UserDetails);