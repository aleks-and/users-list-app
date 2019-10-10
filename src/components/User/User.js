import React from 'react';
import { Link } from 'react-router-dom';

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

  onKeyPressed = (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      this.setState({
        isUserEditing: false,
      });
    }
  }

  editUser = () => {}

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
                <form onSubmit={this.editUser}>
                  <input
                    type="text"
                    className=""
                    value={userNameValue}
                    onChange={this.setNewValue}
                    onBlur={this.editUser}
                    onKeyDown={this.onKeyPressed}
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

export default User;
