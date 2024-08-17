"use server";

import db from "@repo/db/client";
import { CreateTaskSchema, UpdateTaskSchema } from "./validations";
import { AddingTaskSchema } from "../users/create-task-dialog";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function createRecords(input: any) {
  try {
    const record: AddingTaskSchema | any = await db.record.create({
      data: {
        firstName: capitalizeFirstLetter(input.firstName),
        lastName: capitalizeFirstLetter(input.lastName),
        middleName: capitalizeFirstLetter(input.middleName),
        nameExtension: input.nameExtension || "N/A",
        dateIssued: input.dateIssued,
        positionTitle: capitalizeFirstLetter(input.positionTitle),
        itemNo: input.itemNo.toUpperCase(),
        payGrade: input.payGrade,
        salary: input.salary,
        employmentStatus: input.employmentStatus.toUpperCase(),
        periodOfEmployment: input.periodOfEmployment || "N/A",
        natureOfAppointment: input.natureOfAppointment.toUpperCase(),
        dateOfPublication: input.dateOfPublication,
        mode: input.mode || "N/A",
        validated: input.validated || "N/A",
        dateOfAction: input.dateOfAction,
        dateOfRelease: input.dateOfRelease,
        agencyReceivingOffer: input.agencyReceivingOffer || "N/A",
      }
    });
    return record;
  } catch (error) {
    return null;
  }
}

export async function getChunkedRecords() {
  try {
    const records: any = await db.record.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return records || [];
  } catch (error) {
    return null;
  }
}


export async function updateRecord(input: UpdateTaskSchema & { id: string }) {
  try {
    console.log(input)
  } catch (error) {
    console.log(error)
  }
}
