"use server";

import db from "@repo/db/client";
import { CreateTaskSchema } from "./validations";

function convertToISO(dateStr: string) {
  const [month, day, year] = dateStr.split('/').map(Number);
  if (!month || !day || !year) {
    return;
  }

  const date = new Date(year, month - 1, day);
  return date.toISOString().split('T')[0];
}

export async function createRecords(input: any) {
  try {
    const record = await db.record.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        middleName: input.middleName,
        nameExtension: input.nameExtension,
        dateIssued: input.dateIssued,
        positionTitle: input.positionTitle,
        itemNo: input.itemNo,
        payGrade: input.payGrade,
        salary: input.salary,
        employmentStatus: input.employmentStatus.toUpperCase(),
        periodOfEmployment: input.periodOfEmployment,
        natureOfAppointment: input.natureOfAppointment.toUpperCase(),
        dateOfPublication: input.dateOfPublication,
        mode: input.mode,
        validated: input.validated,
        dateOfAction: input.dateOfAction || "",
        dateOfRelease: input.dateOfRelease || "",
        agencyReceivingOffer: input.agencyReceivingOffer,
      }
    });
    console.log(record)
    return record;
  } catch (error) {
    console.log(error)
  }
}

export async function getChunkedRecords() {
  try {
    const records: any = await db.record.findMany({});
    return records;
  } catch (error) {
    console.log(error)
    return null;
  }
}
