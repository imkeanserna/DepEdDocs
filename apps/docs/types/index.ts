import { CreateTaskSchema } from "~/app/_lib/validations";

export type User = {
  id: string,
  lastName: string,
  firstName: string,
  nameExtension: string,
  middleName: string,
  dateIssued: string,
  positionTitle: string,
  itemNo: string,
  payGrade: string,
  salaryRate: string,
  employmentStatus: string,
  periodOfEmployment: string,
  natureOfAppointment: string,
  dateOfPublication: string,
  mode: string,
  validated: string,
  dateOfAction: string,
  dateOfRelease: string,
  agencyReceivingOffer: string
};

export type Record = CreateTaskSchema & {
  id: string,
  createdAt: Date,
  updatedAt: Date
}
