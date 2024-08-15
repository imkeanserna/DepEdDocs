"use client";

import { User } from "~/types";
import { getChunkedRecords } from "../_lib/actions";
import { columns } from "../users/columns";
import DataTable from "../users/data-table";
import React from "react";
import { CreateTaskDialog } from "./create-task-dialog";

export default function TestTable(externalData: any[]) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any[]>(externalData);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await getChunkedRecords();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const addRecord = async (newRecord: any) => {
    setData((prevRecords) => [...prevRecords, newRecord]);
  };

  return (
    <div className="container p-2">
      <CreateTaskDialog onCreate={addRecord}></CreateTaskDialog>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
