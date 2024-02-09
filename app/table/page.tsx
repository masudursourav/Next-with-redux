import ShowDataTable from "./ShowDataTable";
import { accountData } from "./data";
export default function Page() {
  return (
    <div>
      
      <ShowDataTable account={accountData} />
    </div>
  );
}
