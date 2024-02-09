import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Account = {
  accountName: string;
  accountNumber: number;
  accountType: string;
  id: string;
};

export type AccountData = Account[];

const initialState: AccountData = [];

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountData>) => {
      state = action.payload;
      return state;
    },
  },
});
