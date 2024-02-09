import { columns } from "./columns";
import { Account } from "./data";
import DataTable from "./data-table";
export default function ShowDataTable({ account }: { account: Account[] }) {
  return <DataTable columns={columns} data={account} />;
}
