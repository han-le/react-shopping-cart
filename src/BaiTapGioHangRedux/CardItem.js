import React, { Component } from "react";
import { connect } from "react-redux";
import { actDelete } from "./../redux/actions"; //tu dong tim file index
import { actTangGiamSoLuong } from "./../redux/actions";
class CardItem extends Component {
  render() {
    return (
      <tr>
        <td>(Component: CartItem) {this.props.cart_item.maSanPham}</td>
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
              const sanPhamTangGiam = {
                product: itemDuocClicked,
                status: false,
              };
              this.props.prop_tangGiamSoLuong(sanPhamTangGiam);
            }}
          >
            -
          </button>

          {/* So luong san pham */}
          {this.props.cart_item.soLuong}

          {/* Button Tang So Luong, selection = true */}
          <button
            className="btn btn-info"
            onClick={() => {
              const itemDuocClicked = this.props.cart_item;
              const sanPhamTangGiam = {
                product: itemDuocClicked,
                status: true,
              };
              this.props.prop_tangGiamSoLuong(sanPhamTangGiam);
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
              const sanPhamXoa = this.props.cart_item;
              this.props.prop_deleteProduct(sanPhamXoa);
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
    //key: value
    prop_deleteProduct: (sanPhamXoa) => {
      dispatch(actDelete(sanPhamXoa));
    },

    prop_tangGiamSoLuong: (data) => {
      dispatch(actTangGiamSoLuong(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CardItem);
