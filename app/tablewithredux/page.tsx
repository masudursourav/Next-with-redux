"use client";
import { columns } from "@/app/tablewithredux/colums";
import { selectComment } from "@/redux/slices/selector";
import { useSelector } from "react-redux";
import DataTable from "../table/data-table";
import { InputForm } from "./form";
export default function Page() {
  const data = useSelector(selectComment);
  console.log(data);
  
  return (
    <div>
      <InputForm />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
