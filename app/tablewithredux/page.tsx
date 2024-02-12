"use client";
import { columns } from "@/app/tablewithredux/colums";
import { AccountData, accountSlice } from "@/redux/slices/accountSlice";
import { selectAccount } from "@/redux/slices/selector";
import { store } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DataTable from "../table/data-table";
import { getAccounts } from "./action";
import { InputForm } from "./form";
import OptionBar from "./optionBar";

export default function Page() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const limit = params.get("limit") ?? "2";
  const sortBy = params.get("sortBy") ?? "asc";
  const order = params.get("order") ?? "id";
  const page = params.get("page") ?? "1";
  useEffect(() => {
    const fetchData = async () => {
      console.log(page, sortBy, order, limit);
      const data = await getAccounts(page, sortBy, order, limit);
      store.dispatch(accountSlice.actions.setAccount(data));
    };
    fetchData();
  }, [limit, sortBy, order, page]);

  const data: AccountData = useSelector(selectAccount);
  return (
    <div>
      <InputForm />
      <OptionBar />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
