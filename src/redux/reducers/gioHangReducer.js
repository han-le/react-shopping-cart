import moduleName from "module";
import { DELETE_PRODUCT } from "./../constants";
import { THAY_DOI_SO_LUONG } from "./../constants";
import { CHI_TIET_SAN_PHAM } from "./../constants";
import { THEM_SAN_PHAM } from "./../constants";

//Tao trang thai ban dau (empty/with value...)
//Dem tat ca cac du lieu cua project luu vao store
const initialState = {
  //key:value,
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

  //Danh sach Gio Hang user chon mua, the hien trong gio hang o Modal
  danhSachGioHang: [],

  //Danh sanch tat ca cac mat hang cua cua hang
  danhSachSanPham: [
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
  ],
};

//state = initialState (default parameter)
//state la tham so mac dinh
const gioHangReducer = (state = initialState, actions) => {
  //actions: trong ham mapDispatchToProps
  switch (actions.type) {
    case CHI_TIET_SAN_PHAM: {
      //Cap nhat san pham chi tiet
      state.sanPhamChiTiet = actions.payload;

      //Must retrun a new object. Bc of reference so the object? got changed => nothing to update to state
      return { ...state }; //Copy to a new object, this object will have new value
    }

    case THEM_SAN_PHAM: {
      let danhSachGioHangCheckOut = [...state.danhSachGioHang];
      //Neu trong gia hang chua co san pham => add nguyen 1 cai san pham.
      //Neu trong gio hang da co san pham => only tang so luong san pham do len.

      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.maSanPham;
      });

      if (index !== -1) {
        const sanPhamMoi = { ...danhSachGioHangCheckOut[index] }; //Tranh tham chieu vao original array
        sanPhamMoi.soLuong += 1; //Found: tang so luong san pham

        danhSachGioHangCheckOut[index] = sanPhamMoi; //Gan lai
      } else {
        console.log("San pham moi");
        danhSachGioHangCheckOut.push(actions.payload); //Not found: add nguyen cai san pham vao
        actions.payload.soLuong = 1;
      }
      state.danhSachGioHang = danhSachGioHangCheckOut; //cap nhat state de render ra ngoai

      return { ...state };
    }

    case DELETE_PRODUCT: {
      let danhSachSanPhamMoi = [...state.danhSachGioHang];
      danhSachSanPhamMoi = danhSachSanPhamMoi.filter((item) => {
        return item.maSanPham !== actions.payload.maSanPham;
      });
      state.danhSachGioHang = danhSachSanPhamMoi;
      return { ...state };
    }

    case THAY_DOI_SO_LUONG: {
      //Tim vi tri cua san pham duoc CHON
      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === actions.payload.product.maSanPham;
      });
      if (index !== -1) {
        console.log(index);
        var danhSachGioHangMoi = [...state.danhSachGioHang];
        const newProduct = { ...danhSachGioHangMoi[index] };
        if (actions.payload.status) {
          //Tang so luong
          newProduct.soLuong += 1;
          danhSachGioHangMoi[index] = newProduct;
        } else {
          //Giam so luong
          if (newProduct.soLuong > 1) {
            newProduct.soLuong -= 1;
            danhSachGioHangMoi[index] = newProduct;
          } else {
            alert("You hit the minimum");
          }
        }
      }
      state.danhSachGioHang = danhSachGioHangMoi;
      return { ...state };
    }

    default:
      break;
  }
  return state;
};

export default gioHangReducer;
