import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart_item.maSanPham}</td>
        <td>{this.props.cart_item.tenSanPham}</td>
        <td>
          <img src={this.props.cart_item.hinhAnh} width={50} alt />
        </td>
        <td>
          {/* Button Giam so luong, selection = false*/}
          <button
            className="btn btn-dark"
            onClick={() => {
              const itemDuocClicked = this.props.cart_item;
              this.props.prop_TangGiam_Modal(itemDuocClicked, false);
            }}
          >
            -
          </button>
          {this.props.cart_item.soLuong}

          {/* Button Tang So Luong, selection = true */}
          <button
            className="btn btn-info"
            onClick={() => {
              const itemDuocClicked = this.props.cart_item;
              this.props.prop_TangGiam_Modal(itemDuocClicked, true);
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.cart_item.donGia}</td>
        <td>{this.props.cart_item.soLuong * this.props.cart_item.donGia}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.prop_modal_delete(this.props.cart_item);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
