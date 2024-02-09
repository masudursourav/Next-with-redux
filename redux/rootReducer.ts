import { accountSlice } from "./slices/accountSlice";
import { commentSlice } from "./slices/commentSlice";
import { demoSlice } from "./slices/demoSlice";
import { postSlice } from "./slices/postSlice";
export const reducer = {
  posts: postSlice.reducer,
  demo: demoSlice.reducer,
  comment: commentSlice.reducer,
  account: accountSlice.reducer,
};
