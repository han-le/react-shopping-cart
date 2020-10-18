import React, { Component } from "react";
import CardItem from "./CardItem";
import { connect } from "react-redux";

class Modal extends Component {
  //FIRST THING FIRST : Import data of Danh Sach San Pham Check Out

  renderCardList = () => {
    return this.props.prop_danhSachGioHangCheckOut.map((item, index) => {
      return (
        <CardItem
          key={index}
          cart_item={item}
          prop_TangGiam_Modal={this.props.prop_TangGiam_BaiTapGioHang}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          aria-labelledby="modelTitleId"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 1000 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Component: Modal</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product's ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Amount</th>
                      <th>I don't want this</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Each row is a component. */}
                    {this.renderCardList()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//FIRST THING FIRST : Import data of Danh Sach San Pham Check Out. Dung ham mapStateToProps
const mapStateToProps = (state) => {
  return {
    prop_danhSachGioHangCheckOut: state.gioHangReducer.danhSachGioHang,
  };
};

export default connect(mapStateToProps, null)(Modal);
