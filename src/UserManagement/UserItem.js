import React, { Component } from "react";
import { connect } from "react-redux";
import { actDelete, actEditUser } from "./modules/actions";

class UserItem extends Component {
  render() {
    const user = this.props.prop_User; //Nhan ve prop tu User
    return (
      <tr>
        <td>(Component: UserItem) {user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              this.props.deleteUser(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (selectedUser) => {
      dispatch(actDelete(selectedUser));
    },

    editUser: (selectedUser) => {
      dispatch(actEditUser(selectedUser));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
