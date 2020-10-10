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
          <button>-</button>
          {this.props.cart_item.soLuong}
          <button>+</button>
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
