"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { User } from "~/types";
import React from "react";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "lastName",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"lastName"} />,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("lastName")}</div>;
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"firstName"} />,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("firstName")}</div>;
    },
  },
  {
    accessorKey: "nameExtension",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Name Extension"} />,
    cell: ({ row }) => {
      if (row.getValue("nameExtension") === "N/A") {
        return <div>N/A</div>;
      }
      return <div className="font-medium">{row.getValue("nameExtension")}</div>;
    },
  },
  {
    accessorKey: "middleName",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Middle Name"} />,
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("middleName")}</div>;
    },
  },
  {
    accessorKey: "dateIssued",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Date Issued"} />,
  },
  {
    accessorKey: "positionTitle",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Position Title"} />,
  },
  {
    accessorKey: "itemNo",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Item No."} />,
  },
  {
    accessorKey: "payGrade",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Pay Grade"} />,
  },
  {
    accessorKey: "salary",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Salary/Rate"} />,
  },
  {
    accessorKey: "employmentStatus",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Employment Status"} />,
  },
  {
    accessorKey: "periodOfEmployment",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Period Of Employment"} />,
  },
  {
    accessorKey: "natureOfAppointment",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Nature of Appointment"} />,
  },
  {
    accessorKey: "dateOfPublication",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Date of Publication"} />,
  },
  {
    accessorKey: "mode",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Mode"} />,
  },
  {
    accessorKey: "validated",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Validated"} />,
  },
  {
    accessorKey: "dateOfAction",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Date of Action"} />,
  },
  {
    accessorKey: "dateOfRelease",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Date of Release"} />,
  },
  {
    accessorKey: "agencyReceivingOffer",
    header: ({ column }) => <DataTableColumnHeader column={column} title={"Agency Receiving Officer"} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
