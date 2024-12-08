"use client";

import { getChunkedRecords } from "../_lib/actions";
import { columns } from "./columns";
import React from "react";
import { Record } from "../../types/index";
import { DataTableSkeleton } from "./data-table-skeleton";
import DataTable from "./data-table";
import { toast } from "sonner";
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';

export default function ClientTable() {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter();

  React.useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (isLoaded && isSignedIn) {
      const fetchData = async () => {
        try {
          const fetchRecords = await getChunkedRecords();
          setData(fetchRecords || []); // Default to empty array
        } catch (error) {
          toast.error("Error fetching data, try again later");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [isLoaded, isSignedIn]);

  const addRecord = async (newRecord: Record) => {
    setData((prevRecords) => [newRecord, ...prevRecords]);
  };

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>; // Temporary loading state for redirection
  }
  return (
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
