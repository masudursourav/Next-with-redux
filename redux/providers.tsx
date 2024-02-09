"use client";
// Remove the duplicate import statement for React
// import React from "react";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Postarray, postSlice } from "./slices/postSlice";
import { store } from "./store";
interface ProvidersProps {
  children: React.ReactNode;
  post: Postarray;
}

export const Providers: React.FC<ProvidersProps> = ({ children, post }) => {
  useEffect(() => {
    store.dispatch(postSlice.actions.setPost(post));
    //store.dispatch(demoSlice.actions.setDemo(demo));
    console.log("this is form useeffect");
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
