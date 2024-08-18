"use client";

import { User } from "~/types";
import { getChunkedRecords } from "../_lib/actions";
import { columns } from "./columns";
// import DataTable from "../users/data-table";
import React, { lazy } from "react";
import { AddingTaskSchema, CreateTaskDialog } from "./create-task-dialog";
import { DataTableSkeleton } from "./data-table-skeleton";
import DataTable from "./data-table";
import { toast } from "sonner";
import { CreateTaskSchema } from "../_lib/validations";

export default function ClientTable() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const fetchRecords = await getChunkedRecords();
        if (fetchRecords === null) {
          toast.error("Error fetching data, try again later");
        }
        setData(fetchRecords);
      } catch (error) {
        toast.error("Error fetching data, try again later");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const addRecord = async (newRecord: AddingTaskSchema) => {
    setData((prevRecords) => [newRecord, ...prevRecords]);
  };

  return (
    // {/* <div className="container p-2"> */}
    // {/*   {/* <CreateTaskDialog onCreate={addRecord}></CreateTaskDialog> */} */}
    // {/*   <DataTable data={data} columns={columns} onCreate={addRecord} /> */}
    // {/* </div> */}
    <div className="container p-2">
      {loading ? (
        <DataTableSkeleton
          columnCount={5}
          searchableColumnCount={1}
          filterableColumnCount={2}
          cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
          shrinkZero
        />
      )
        :
        <DataTable data={data} columns={columns} onCreate={addRecord} />
      }
    </div>
  );
}
