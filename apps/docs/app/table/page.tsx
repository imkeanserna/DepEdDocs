import { columns } from "../users/columns";
import DataTable from "../users/data-table";
import { users } from "../users/users";

export default async function Home() {
  // This is where you would fetch external data:
  // const exampleExternalData = await fetchExternalDataFunction();

  // In Our example we use local data
  return (
    <div className="container p-2">
      <DataTable data={users} columns={columns} />
    </div>
  );
}
