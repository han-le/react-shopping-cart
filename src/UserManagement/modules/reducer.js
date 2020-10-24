//Store ban dau chua du lieu

import { DELETE_USER, SUBMIT_USER, EDIT_USER, GET_KEYWORD } from "./constants";

//Danh sach user
let initialState = {
  //userList la state
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 3,
      name: "Thuy Loan",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "USER",
    },
    {
      id: 4,
      name: "Bich Nu",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 5,
      name: "Bich Dao",
      username: "bichbich",
      email: "bichbich@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],

  userEdit: null, //Dua vao cai nay de biet khi nao add user moi (userEdit:null), khi nao edit user da ton tai (userEdit: !null)
  keyword: "",
};

//state = initialState => default params

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //Ham xoa user
    case DELETE_USER: {
      //Logic remove item out of array
      console.log("Delete is clicked");
      let newUserList = [...state.userList];
      newUserList = newUserList.filter((item) => {
        //Keep the items that has index different from the selected item
        return item.id !== action.payload.id;
      });
      //Duyet xong thi gan mang moi return vao mang ban dau
      state.userList = newUserList;
      return { ...state };
    }

    //Ham submit user moi
    case SUBMIT_USER: {
      /**
       * submit khi (1) add user (2) edit user
       * Neu id da ton tai thi la edit
       * Neu id hoan toam moi thi add vao
       */
      if (action.payload.id) {
        //UPDATE

        const index = state.userList.findIndex((item) => {
          return item.id === action.payload.id; //Tim vi tri cua item trong array
        });
        if (index !== -1) {
          //Found ==> update
          let newUserList = [...state.userList];
          newUserList[index] = action.payload; //Assign gia tri moi nay vao user da ton tai
          state.userList = newUserList; //assign back
          console.log(newUserList[index]);
          return { ...state };
        }
      } else {
        //ADD
        // let newUserList = [...state.userList];
        let newUser = { ...action.payload, id: Math.random() }; //Math.random() is temporary solution

        let newUserList = [...state.userList, newUser]; //Luc nay van chua co id
        state.userList = newUserList;
      }

      return { ...state };
    }

    case EDIT_USER: {
      console.log("Edit is clicked");
      let editedUser = action.payload;
      state.userEdit = editedUser;
      return { ...state };
    }

    case GET_KEYWORD: {
      console.log("Search function");
      console.log(action);
      state.keyword = action.payload; //Assign keyword user type in to state in reducer
      return { ...state };
    }

    default:
      return { ...state }; //return 1 state moi
  }
};
//Must do: combine userReducer vao rootReducer. Vao file src/redux/reducers/index.js

export default userReducer;
