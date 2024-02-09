import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type CommentArray = Comment[];

const initialState: CommentArray = [];

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action: PayloadAction<CommentArray>) => {
      state = action.payload;
      return state;
    },
  },
});
