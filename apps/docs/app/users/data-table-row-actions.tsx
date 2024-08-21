"use client";

import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Eye, Pencil } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu"
import { UpdateTaskSheet } from "./update-record-sheet";
import { DeleteTasksDialog } from "./delete-task-dialog";

interface DataTableRowActionsProps<TData> {
  row: {
    original: TData;
    toggleSelected: (value: boolean) => void;
  }
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const [showUpdateTaskSheet, setShowUpdateTaskSheet] = React.useState(false)
  const [showDeleteTaskDialog, setShowDeleteTaskDialog] = React.useState(false)

  return (
    <DropdownMenu>
      <UpdateTaskSheet
        open={showUpdateTaskSheet}
        onOpenChange={setShowUpdateTaskSheet}
        record={row.original}
      />
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">{"Open Menu"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button variant={"ghost"} size={"sm"} className={"justify-start w-full"} asChild>
            <Link href={"#"}>
              <Eye className="w-4 h-4 text-blue-500" />
              {<span className="ml-2">{"View"}</span>}
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setShowUpdateTaskSheet(true)}>
          <Button variant={"ghost"} size={"sm"} className={"justify-start w-full"}>
            <Pencil className="h-4 w-4 text-green-500" />
            {<span className="ml-2">{"Update"}</span>}
          </Button>
        </DropdownMenuItem>
        <DeleteTasksDialog
          open={showDeleteTaskDialog}
          onOpenChange={setShowDeleteTaskDialog}
          record={row.original}
          showTrigger={true}
          onSuccess={() => row.toggleSelected(false)}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
