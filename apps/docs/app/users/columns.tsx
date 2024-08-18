"use client";

import { ColumnDef } from "@tanstack/react-table";
import clsx from "clsx";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { usersRole, usersStatus } from "./definitions";
import { User } from "~/types";
import React from "react";
import { UpdateTaskSheet } from "./update-record-sheet";

// export const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "userName",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"User"} />,
//     cell: ({ row }) => {
//       return <div className="font-medium">{row.getValue("userName")}</div>;
//     },
//   },
//   {
//     accessorKey: "phone",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Phone"} />,
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Email"} />,
//   },
//   {
//     accessorKey: "location",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Location"} />,
//   },
//   {
//     accessorKey: "role",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Role"} />,
//     cell: ({ row }) => {
//       const role = usersRole.find((role) => role.value === row.getValue("role"));
//
//       if (!role) {
//         // If a value is not what you expect or does not exist you can return null.
//         return null;
//       }
//
//       return <span>{role.label}</span>;
//     },
//   },
//   {
//     accessorKey: "rtn",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"RTN"} />,
//   },
//   {
//     accessorKey: "otherInformation",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Other Info"} />,
//   },
//   {
//     accessorKey: "status",
//     header: ({ column }) => <DataTableColumnHeader column={column} title={"Status"} />,
//     cell: ({ row }) => {
//       const status = usersStatus.find((status) => status.value === row.getValue("status"));
//
//       if (!status) {
//         return null;
//       }
//
//       return (
//         <div
//           className={clsx("flex w-[100px] items-center", {
//             "text-red-500": status.value === "inactive",
//             "text-green-500": status.value === "active",
//           })}>
//           {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
//           <span>{status.label}</span>
//         </div>
//       );
//     },
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id));
//     },
//   },
//   {
//     id: "actions",
//     cell: ({ row }) => <DataTableRowActions row={row} />,
//   },
// ];

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
    cell: ({ row }) => {
      return (
        <>
          <DataTableRowActions row={row} />
        </>
      )
    },
  },
];
