import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmit } from "./modules/actions";

class Modal extends Component {
  //Ham khoi tao chi chay mot lan duy nhat trong vong doi cua no

  constructor(props) {
    super(props);
    //Tao state to save text user put in
    this.state = {
      //key:value (key has the same name as "name" in <form>)
      id: "",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "USER", //select option
    };
  }

  //LifeCycle: Khi viet ra se chay luon ko phai goi. Ham nay chay nhieu lan, phu thuoc vao nextProps thay doi
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("LifeCycle: Xuat hien khi nhan props moi");
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      //Khi bam vao nut Edit thi se cap nhat lai state
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      });
    }
  }

  //event la defaul params
  handleOnChange = (event) => {
    console.log("Value of Target of event (input form): ");
    console.log(event.target.value);

    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    this.setState({
      [name]: value, //Viet tat (shorthand)
    });
    // console.log(this.state); ==> Cant be here because it will run before setState()
  };

  //Click submit to send information
  handleSubmit = (e) => {
    e.preventDefault(); //Giup khong load lai trang de test
    console.log(this.refs);
    this.refs.btnClose.click(); //Set tu dong close modal if click submit button
    this.props.submitUser(this.state);
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "Edit User" : "Add User"} (Component
                Modal)
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref="btnClose" //Tu them vao => DOM in REACT
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* FORM FOR USER TO INPUT */}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username" //Tung the input phai dat 1 cai "name" khac nhau
                    onChange={this.handleOnChange}
                    value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.handleOnChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleOnChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    onChange={this.handleOnChange}
                    value={this.state.phoneNumber}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    onChange={this.handleOnChange}
                    value={this.state.type}
                  >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Thay doi title cua Modal
const mapStateToProps = (state) => {
  return {
    userEdit: state.prop_userReducer.userEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (submittedUser) => {
      dispatch(actSubmit(submittedUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
