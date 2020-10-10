import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    // Check what props this component take
    // console.log("----------------------");
    // console.log("Properties of SanPham");
    // console.log(this.props);

    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
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
              this.props.prop_themSanPham(this.props.sanPham);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
