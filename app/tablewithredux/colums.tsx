"use client";
import { Comment } from "@/redux/slices/commentSlice";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<Comment>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "postId",
    accessorKey: "postId",
  },
  {
    header: "NAME",
    accessorKey: "name",
  },
  {
    header: "EMAIL",
    accessorKey: "email",
  },
  {
    header: "BODY",
    accessorKey: "body",
  },
];
