import React from 'react';
import { connect } from 'react-redux';

import { loadData, deleteUser } from '../../store';
import User from '../User/User';

import './UsersList.scss';

class UsersList extends React.Component {
  loadData = () => {
    this.props.loadData();
  }

  deleteUser = (id) => {
    this.props.deleteUser(id);
  }

  render() {
    const {
      users, 
      isLoading, 
      isLoaded,
    } = this.props;

    return (
      <div className="container has-text-centered users-list">
        {!isLoaded &&
          <button
            className="button is-dark is-large"
            onClick={this.loadData}
            disabled={isLoading}
          >
            Get users
          </button>
        }
        {isLoaded &&
          <section>
            {users.map(user => (
              <User
                user={user} 
                deleteUser={this.deleteUser} 
                key={user.id} 
              />
            ))}
          </section>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  isLoading: state.isLoading,
  isLoaded: state.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData()),
  deleteUser: (id) => dispatch(deleteUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
