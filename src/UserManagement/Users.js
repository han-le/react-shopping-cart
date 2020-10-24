import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

//Lay data tu store ve. Lay state chuyen thanh prop
const mapStateToProps = (state) => {
  return {
    props_userList: state.prop_userReducer.userList,
    keyword: state.prop_userReducer.keyword,
  };
};

class Users extends Component {
  //Ham duyet mang tra ve component UserList
  renderTable = () => {
    let userList = this.props.props_userList;

    //====== SEARCH ITEM
    let keyword = this.props.keyword.toLowerCase();
    userList = userList.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.indexOf(keyword) !== -1;
    });

    //Duyet mang thong qua UserList
    //Tai sao duyet bang map hay hon forEach? => Vi no tra lai 1 mang. forEach khong tra ve mang moi nen ban dau phai tao 1 mang empty roi moi lan loop thi cong don vao
    return userList.map((item) => {
      return <UserItem key={item.id} prop_User={item} />;
    });
  };

  render() {
    return (
      <div>
        <h6>Component User</h6>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Duyet mang (tren store) va render ra day */}
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Users);
