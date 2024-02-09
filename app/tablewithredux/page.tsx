"use client";
import { columns } from "@/app/tablewithredux/colums";
import { AccountData } from "@/redux/slices/accountSlice";
import { selectAccount } from "@/redux/slices/selector";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import DataTable from "../table/data-table";
import { InputForm } from "./form";
import OptionBar from "./optionBar";

export default function Page() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  console.log(params.get("limit"));
  console.log(params.get("page"));
  console.log(params.get("sortBy"));
  console.log(params.get("order"));
  const data: AccountData = useSelector(selectAccount);
  return (
    <div>
      <InputForm />
      <OptionBar />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
