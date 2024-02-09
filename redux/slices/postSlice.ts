import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type PostState = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export type Postarray = PostState[];

const initialState: Postarray = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<Postarray>) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});
