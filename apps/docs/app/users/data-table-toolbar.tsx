"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { CreateTaskDialog } from "./create-task-dialog";
import { Record } from "../../types/index";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onCreate: (newRecord: Record) => Promise<void>;
}

export function DataTableToolbar<TData>(
  { table, onCreate }: DataTableToolbarProps<TData>
) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={"Search by Last Name"}
          value={(table.getColumn("lastName")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("lastName")?.setFilterValue(event.target.value)}
          className="h-10 w-[150px] lg:w-[300px]"
        />
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3">
            {"Clean Filters"}
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex gap-3">
        <CreateTaskDialog onCreate={onCreate} />
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
