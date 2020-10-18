//Root Reducer

import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";
import userReducer from "./../../UserManagement/modules/reducer";
//Tao reducer lon nhat wrap up all child reducers
const rootReducer = combineReducers({
  //child reducers (object)
  //gioHangReducer : gioHangReducer (if key and value have the same name we can write just one)
  gioHangReducer,
  prop_userReducer: userReducer,
});

export default rootReducer;
