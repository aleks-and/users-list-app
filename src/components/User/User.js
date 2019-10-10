import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { editUser } from '../../store';

class User extends React.Component {
  state = {
    isUserEditing: false,
    userNameValue: this.props.user.first_name,
  }

  showUserEditForm = () => {
    this.setState({
      isUserEditing: true,
    });
  }

  setNewValue = ({
    target: {
      value,
    }
  }) => {
    this.setState({
      userNameValue: value,
    });
  }

  onKeyPressed = (event, id) => {
    if (event.key === "Escape" || event.key === "Esc") {
      this.editUser(event, id);
    }
  }

  editUser = async (event, id) => {
    event.preventDefault();
    const { userNameValue } = this.state;
    if (userNameValue.trim().length > 0) {
      await this.props.editUser(id, userNameValue);
    }
    this.setState({
      isUserEditing: false,
    });
  }

  render() {
    const {
      user: {
        avatar,
        first_name,
        id
      },
      deleteUser
    } = this.props;

    const { isUserEditing, userNameValue } = this.state;

    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img className="is-rounded" src={avatar} alt=""></img>
              </figure>
            </div>
            <div className="media-content content">
              {isUserEditing
                ?
                <form onSubmit={event => this.editUser(event, id)}>
                  <input
                    type="text"
                    className=""
                    value={userNameValue}
                    onChange={this.setNewValue}
                    onBlur={event => this.editUser(event, id)}
                    onKeyDown={event => this.onKeyPressed(event, id)}
                    autoFocus
                  />
                </form>
                :
                <p
                  className="title is-4"
                  onClick={this.showUserEditForm}
                >
                  {first_name}
                </p>
              }
              <p>
                <Link to={`/user/${id}`}>more info</Link>
              </p>
              <p>
                <button
                  className="button is-danger"
                  onClick={() => deleteUser(id)}
                >
                  Delete user
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editUser: (id, value) => dispatch(editUser(id, value)),
});

export default connect(
  null,
  mapDispatchToProps
)(User);
