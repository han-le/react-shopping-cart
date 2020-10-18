import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import { actEditUser } from "./modules/actions";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <h6>(Component: index)</h6>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.thayDoiTieuDeModal();
            }}
          >
            Add User
          </button>
        </div>
        <Users />
        <Modal />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiTieuDeModal: () => {
      dispatch(actEditUser(null));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
