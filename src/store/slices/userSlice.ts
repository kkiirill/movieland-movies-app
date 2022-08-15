import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialState: User = {
  email: null,
  id: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.id = null
    },
  },
});

export const { setUser, removeUser } = userReducer.actions;
