import { User } from "~/types";
import { getChunkedRecords } from "../_lib/actions";
import { columns } from "../users/columns";
import { CreateTaskDialog } from "../users/create-task-dialog";
import DataTable from "../users/data-table";
import { users } from "../users/users";
import { useRouter } from "next/router";
import React from "react";
import { Skeleton } from "@repo/ui/components/ui/skeleton";
import { DataTableSkeleton } from "../users/data-table-skeleton";
import ClientTable from "../users/client-table";

export default async function Home() {
  // // This is where you would fetch external data:
  // const exampleExternalData: User[] = await getChunkedRecords();

  // // In Our example we use local data
  //
  // // put table skeleton here
  // const [loading, setLoading] = React.useState(true);
  // const [data, setData] = React.useState(exampleExternalData);
  //
  // React.useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await getChunkedRecords();
  //       setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //
  //   fetchData();
  // }, []);

  return (
    <ClientTable />
  );
}
