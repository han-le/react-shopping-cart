import { DELETE_USER, SUBMIT_USER, EDIT_USER } from "./constants";

export const actDelete = (selectedUser) => {
  return {
    type: DELETE_USER,
    payload: selectedUser,
  };
};

export const actSubmit = (submittedUser) => {
  return {
    type: SUBMIT_USER,
    payload: submittedUser,
  };
};

export const actEditUser = (selectedUser) => {
  return {
    type: EDIT_USER,
    payload: selectedUser,
  };
};
