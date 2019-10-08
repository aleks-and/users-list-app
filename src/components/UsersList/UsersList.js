import React from 'react';
import { connect } from 'react-redux';

import { loadData } from '../../store';

import User from '../User/User';
import './UsersList.scss';

class UsersList extends React.Component {
  loadData = () => {
    this.props.loadData();
  }

  render() {
    const { loadData, users, isLoading, isLoaded } = this.props;

    return (
      <div className="container has-text-centered users-list">
        {!isLoaded &&
          <button
            className="button is-dark is-large"
            onClick={loadData}
            disabled={isLoading}
          >
            Get users
          </button>
        }
        {isLoaded &&
          <section>
            {users.map(user => (
              <User user={user} key={user.id} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
