import React, { Component } from "react";
import { connect } from "react-redux";
import { actShowDetails } from "./../redux/actions";
class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <polygon>Component: SanPham</polygon>
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>

          {/* Viet ham handle details button */}
          <button
            className="btn btn-success"
            onClick={() => {
              const sanPhamDuocClicked = this.props.sanPham;
              this.props.handleDetail(sanPhamDuocClicked);
            }}
          >
            Details
          </button>

          {/* Viet ham handle "add to cart" button */}
          <button
            className="btn btn-warning"
            onClick={() => {
              const sanPhamDuocClicked = this.props.sanPham;
              this.props.handleAddCart(sanPhamDuocClicked);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

//Upload data to Store. Khi user click vao button "Detail" => gui de lieu len store
//mapDispatchToProps la ham cua redux
const mapDispatchToProps = (dispatch) => {
  // return {props:method gui action len store}
  return {
    handleDetail: (sanPhamDuocClicked) => {
      dispatch(actShowDetails(sanPhamDuocClicked));
    },

    //Khi user bam vao button "Add to cart" se chay ham nay
    handleAddCart: (sanPhamDuocThem) => {
      const action = {
        type: "ADD_PRODUCT",
        payload: sanPhamDuocThem,
      };
      dispatch(action); //Ham nay gui "action" len store
    },
  };
};

//Ham connect() co 2 param: map
//null: By defaul tham so thu nhat la download data tu store ve, neu ko co phai de null
export default connect(null, mapDispatchToProps)(SanPham);
