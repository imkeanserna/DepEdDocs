"use server";

import db from "@repo/db/client";
import { UpdateTaskSchema } from "./validations";
import { Record } from "../../types/index";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function createRecords(input: any) {
  try {
    const record: Record | any = await db.record.create({
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
    return records || [];
  } catch (error) {
    return null;
  }
}


export async function updateRecord(input: UpdateTaskSchema & { id: string }) {
  try {
    const natureOfAppointment: any = input.natureOfAppointment || "PROMOTION";
    const record = await db.record.update({
      where: {
        id: input.id
      },
      data: {
        firstName: capitalizeFirstLetter(input.firstName || ""),
        lastName: capitalizeFirstLetter(input.lastName || ""),
        middleName: capitalizeFirstLetter(input.middleName || ""),
        nameExtension: input.nameExtension || "N/A",
        dateIssued: input.dateIssued,
        positionTitle: capitalizeFirstLetter(input.positionTitle || ""),
        itemNo: input.itemNo?.toUpperCase() || "",
        payGrade: input.payGrade,
        salary: input.salary,
        employmentStatus: input.employmentStatus,
        periodOfEmployment: input.periodOfEmployment || "N/A",
        natureOfAppointment: natureOfAppointment,
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

export async function deleteRecord(id: string) {
  try {
    const result = await db.record.delete({
      where: {
        id
      }
    });
    return result;
  } catch (error) {
    return null;
  }
}
