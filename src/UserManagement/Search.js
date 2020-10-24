import React, { Component } from "react";
import { actSearch } from "./modules/actions";
import { connect } from "react-redux";

class Search extends Component {
  /**
   * Duyet mang sau khi filter
   */

  handleOnSearch = (event) => {
    let keyword = event.target.value;
    //Len tren reducer create keyword array, tu component dispatch 1 action len keyword tren reducer
    this.props.getKeyword(keyword);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        placeholder="Search by Name"
        onChange={this.handleOnSearch}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actSearch(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
