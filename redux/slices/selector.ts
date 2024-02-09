import type { ReduxState } from "../store";

export const selectPost = (state: ReduxState) => state.posts;
export const selectDemo = (state: ReduxState) => state.demo;
export const selectComment = (state: ReduxState) => state.comment;
