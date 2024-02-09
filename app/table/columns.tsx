"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Account } from "./data";
export const columns: ColumnDef<Account>[] = [
  {
    header: "ACCOUNT NUMBER",
    accessorKey: "acct_num",
  },
  {
    header: "ACCOUNT TYPE",
    accessorKey: "acct_type",
  },
  {
    header: "ACCOUNT NAME",
    accessorKey: "acct_nam",
  },
];
