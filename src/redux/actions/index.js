//Quan ly tat ca actions cua project

import { DELETE_PRODUCT } from "./../constants";
import { THAY_DOI_SO_LUONG } from "./../constants";
import { CHI_TIET_SAN_PHAM } from "./../constants";
import { THEM_SAN_PHAM } from "./../constants";

export const actDelete = (sanPhamXoa) => {
  const action = {
    //key:value
    type: DELETE_PRODUCT,
    payload: sanPhamXoa,
  };
  return action;
};

export const actTangGiamSoLuong = (data) => {
  return {
    type: THAY_DOI_SO_LUONG,
    payload: data,
  };
};

export const actShowDetails = (sanPhamDuocClicked) => {
  return {
    type: CHI_TIET_SAN_PHAM, //mo ta cong viec sap xay ra tren reducer.
    payload: sanPhamDuocClicked, //Day la item se duoc gui len store
  };
};
