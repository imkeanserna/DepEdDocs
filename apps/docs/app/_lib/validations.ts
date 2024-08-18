import * as z from "zod";

export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  per_page: z.coerce.number().default(10),
  sort: z.string().optional(),
  title: z.string().optional(),
  status: z.string().optional(),
  priority: z.string().optional(),
  from: z.string().optional(),
  to: z.string().optional(),
  operator: z.enum(["and", "or"]).optional(),
});

export const getTasksSchema = searchParamsSchema;

export type GetTasksSchema = z.infer<typeof getTasksSchema>;

// Define the enums directly in the Zod schema
// export const LabelEnum = z.enum(["bug", "feature", "enhancement"]);
// export const StatusEnum = z.enum(["todo", "in_progress", "done"]);
// export const PriorityEnum = z.enum(["low", "medium", "high"]);

export const NatureOfAppointmentEnum = z.enum([
  "PROMOTION",
  "DEMOTION",
  "ORIGINAL",
  "REEMPLOYMENT",
  "RECLASIFICATION",
  "TRANSFER",
])

export const EmploymentStatusEnum = z.enum([
  "PERMANENT",
  "PROVISIONAL",
  "SUBSTITUTE"
])

export const Mode = z.enum(["CSC JOB PORTAL", "N/A"]);

// export const createTaskSchema = z.object({
//   title: z.string(),
//   label: LabelEnum,
//   status: StatusEnum,
//   priority: PriorityEnum,
// });
//

export const createTaskSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  nameExtension: z.string().optional(),
  dateIssued: z.string(),
  positionTitle: z.string(),
  itemNo: z.string(),
  payGrade: z.coerce.number().positive(),
  salary: z.coerce.number().positive(),
  employmentStatus: EmploymentStatusEnum,
  periodOfEmployment: z.string().optional(),
  natureOfAppointment: NatureOfAppointmentEnum,
  dateOfPublication: z.string(),
  mode: Mode,
  validated: z.string().optional(),
  dateOfAction: z.string().optional(),
  dateOfRelease: z.string().optional(),
  agencyReceivingOffer: z.string().optional(),
});

export type CreateTaskSchema = z.infer<typeof createTaskSchema>;

// export const updateTaskSchema = z.object({
//   title: z.string().optional(),
//   label: LabelEnum.optional(),
//   status: StatusEnum.optional(),
//   priority: PriorityEnum.optional(),
// });


export const updateTaskSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  middleName: z.string().optional(),
  nameExtension: z.string().optional(),
  dateIssued: z.string().optional(),
  positionTitle: z.string().optional(),
  itemNo: z.string().optional(),
  payGrade: z.coerce.number().positive().optional(),
  salary: z.coerce.number().positive(),
  employmentStatus: EmploymentStatusEnum.optional(),
  periodOfEmployment: z.string().optional(),
  natureOfAppointment: NatureOfAppointmentEnum,
  dateOfPublication: z.string().optional(),
  mode: Mode.optional(),
  validated: z.string().optional(),
  dateOfAction: z.string().optional(),
  dateOfRelease: z.string().optional(),
  agencyReceivingOffer: z.string().optional(),
});

export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>;
