"use client";
import { Account } from "@/redux/slices/accountSlice";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Account>[] = [
  {
    header: "Account Name",
    accessorKey: "accountName",
  },
  {
    header: "Account Number",
    accessorKey: "accountNumber",
  },
  {
    header: "Account Type",
    accessorKey: "accountType",
  },
  {
    header: "EMAIL",
    accessorKey: "email",
  },
  {
    header: "ID",
    accessorKey: "id",
  },
];
