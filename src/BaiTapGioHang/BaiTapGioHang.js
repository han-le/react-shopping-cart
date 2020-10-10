/**
 * các bước thực hiện :
 * 1. dàn layout ( html css ) - done
 * 2. xác định data thay đổi và lưu vào state - done
 * 3. lấy data trong state đi binding ra jsx - done
 * 4. render mãng dử liệu
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa sp khoải giỏ hàng
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9. xây dựng chức năng hiển thị tông số sản phẩm
 */

import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      maSanPham: "VIN",
      tenSanPham: "Vinsmart",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 10 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
      donGia: 200,
    },
    {
      maSanPham: "GN",
      tenSanPham: "Galaxy Note",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "25 MP",
      cameraSau: "Chính 20 MP & Phụ 8 MP, 5 MP",
      ram: "8 GB",
      rom: "16 GB",
      donGia: 500,
    },
    {
      maSanPham: "IP",
      tenSanPham: "iPhone 10",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "IOS",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 30 MP & Phụ 8 MP, 5 MP",
      ram: "64 GB",
      rom: "86 GB",
      donGia: 1000,
    },
  ];

  // Mac dinh khi load trang web
  state = {
    sanPhamChiTiet: {
      maSanPham: "1",
      tenSanPham: "",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },

    danhSachGioHang: [], //Pass qua cho Modal.js
  };

  handleDetailButton = (sanPham) => {
    // console.log("show details" + sanPham);

    // Set lat state de hien thi
    this.setState({ sanPhamChiTiet: sanPham });
  };

  handleThemSanPham_1 = (sanPham) => {
    console.log(this.state.danhSachGioHang);
    console.log("Product is added!");

    //Copy the array
    let danhSachGioHangMoi = [...this.state.danhSachGioHang];

    // Add this product to the list of products:
    // danhSachGioHangMoi.push(sanPham);
    danhSachGioHangMoi = [...danhSachGioHangMoi, sanPham];

    //Update lai cai State
    this.setState({ danhSachGioHang: danhSachGioHangMoi });
  };

  handleThemSanPham = (sanPham) => {
    //Copy the array
    let danhSachGioHangMoi = [...this.state.danhSachGioHang];

    /*
     *NEU CHON SAN PHAM TRUNG NHAU SE HIEN TREN 1 DONG VA TANG SO LUONG
     * Tim xem item user add da ton tai trong mang hay chua? => Dung findIndex
     * Neu sp da ton tai, return index, neu sp chua co, return -1
     * ------ABOUT findIdex():
     * The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
    * The findIndex() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
Otherwise it returns -1
     */
    const index_of_selected = danhSachGioHangMoi.findIndex((each_item) => {
      return each_item.maSanPham === sanPham.maSanPham;
      //return the index of item, if not found return -1
    });

    if (index_of_selected !== -1) {
      //Found: Merge into one row and increment the quantity
      danhSachGioHangMoi[index_of_selected].soLuong += 1; //Bien "soLuong" them va dinh nghia o day
    } else {
      //Not found: Set so luong = 1, push vao array
      // Add this product to the list of products:
      danhSachGioHangMoi = [...danhSachGioHangMoi, sanPham];

      // Set quantity = 1. Bien "soLuong" them va dinh nghia o day
      sanPham.soLuong = 1;
    }

    //Update lai cai State. Cai nay phai de cuoi cung
    this.setState({ danhSachGioHang: danhSachGioHangMoi });

    // Notify to user
    alert("Added!");
  };

  // XOA SAN PHAM. Event for "delete button" in CardItem.js
  handleDelete = (cart_item) => {
    //Codes to remove cart_item using filer()
    //Syntax: const array_after_filter = original_array.filter(original_array_element => return condition_to_keep);
    let danhSachGioHangMoi = this.state.danhSachGioHang;
    danhSachGioHangMoi = danhSachGioHangMoi.filter((item) => {
      return cart_item.maSanPham !== item.maSanPham;
    });
    this.setState({ danhSachGioHang: danhSachGioHangMoi });
  };
  // end of XOA SAN PHAM

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham
            sanPham={sanPham}
            handleDetail={this.handleDetailButton} //handleDetail is the property,  handleDetailButton is the method just wrote
            prop_themSanPham={this.handleThemSanPham} //render trong Modal.js
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (5)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>

            {/* CART MODAL */}
            <Modal
              prop_DanhSachGioHang={this.state.danhSachGioHang}
              prop_DeleteEvent={this.handleDelete}
            />

            {/* PHONE'S SPECS */}
            <div className="row">
              {/* Image (left) */}
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              {/* Spec (right) */}
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Phone's name</td>
                      <td>{this.state.sanPhamChiTiet.tenSanPham}</td>
                    </tr>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
