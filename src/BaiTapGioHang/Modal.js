import React, { Component } from "react";
import CardItem from "./CardItem";

export default class Modal extends Component {
  // Modal Cart ko co array san pham => pass danh sach san pham from BaiTapGioHang.js vao
  //this.props.prop_DanhSachGioHang => Nhan lai cai array tu BaiTapGioHang.js thong qua prop

  renderCardList = () => {
    return this.props.prop_DanhSachGioHang.map((item, index) => {
      return (
        <CardItem
          key={index}
          cart_item={item}
          prop_modal_delete={this.props.prop_DeleteEvent}
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
                <h5 className="modal-title">Giỏ hàng</h5>
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

                    {/* Ham renderCardList da return <CardItem key={index} />; */}
                    {/* <CardItem />
                    <CardItem /> */}
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

/*Modal can co danh sach san pham.
 * Ban dau chua co DS san pham => dung props truyen vao
 */
