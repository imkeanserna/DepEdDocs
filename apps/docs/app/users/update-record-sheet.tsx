"use client"

import * as React from "react"
// import { tasks, type Task } from "@/db/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@repo/ui/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@repo/ui/components/ui/sheet"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Icons } from "../../components/icons"

// import { updateTask } from "../_lib/actions"
import { EmploymentStatusEnum, Mode, NatureOfAppointmentEnum, updateTaskSchema, type UpdateTaskSchema } from "../_lib/validations"
import { updateRecord } from "../_lib/actions"
import { AddingTaskSchema } from "./create-task-dialog"
import { Input } from "@repo/ui/components/ui/input"

interface UpdateRecordSheetProps
  extends React.ComponentPropsWithRef<typeof Sheet> {
  record: AddingTaskSchema | any
}

export function UpdateTaskSheet({ record, ...props }: UpdateRecordSheetProps) {
  const [isUpdatePending, startUpdateTransition] = React.useTransition()

  const form = useForm<UpdateTaskSchema>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      firstName: record.firstName ?? "",
      lastName: record.lastName ?? "",
      middleName: record.middleName ?? "",
      nameExtension: record.nameExtension ?? "",
      dateIssued: record.dateIssued ?? "",
      positionTitle: record.positionTitle ?? "",
      itemNo: record.itemNo ?? "",
      payGrade: Number(record.payGrade) ?? 0,
      salary: Number(record.salary) ?? 0,
      employmentStatus: record.employmentStatus,
      periodOfEmployment: record.periodOfEmployment ?? "",
      natureOfAppointment: record.natureOfAppointment,
      dateOfPublication: record.dateOfPublication ?? "",
      mode: record.mode,
      validated: record.validated ?? "",
      dateOfAction: record.dateOfAction ?? "",
      dateOfRelease: record.dateOfRelease ?? "",
      agencyReceivingOffer: record.agencyReceivingOffer ?? "",
    },
  });

  React.useEffect(() => {
    form.reset({
      firstName: record.firstName ?? "",
      lastName: record.lastName ?? "",
      middleName: record.middleName ?? "",
      nameExtension: record.nameExtension ?? "",
      dateIssued: record.dateIssued ?? "",
      positionTitle: record.positionTitle ?? "",
      itemNo: record.itemNo ?? "",
      payGrade: Number(record.payGrade) ?? 0,
      salary: Number(record.salary) ?? 0,
      employmentStatus: record.employmentStatus,
      periodOfEmployment: record.periodOfEmployment ?? "",
      natureOfAppointment: record.natureOfAppointment,
      dateOfPublication: record.dateOfPublication ?? "",
      mode: record.mode,
      validated: record.validated ?? "",
      dateOfAction: record.dateOfAction ?? "",
      dateOfRelease: record.dateOfRelease ?? "",
      agencyReceivingOffer: record.agencyReceivingOffer ?? "",
    })
  }, [record, form])

  function onSubmit(input: UpdateTaskSchema) {
    startUpdateTransition(async () => {
      const result = await updateRecord({
        id: record.id,
        ...input,
      });

      if (result === null) {
        toast.error("Error updating record")
        return;
      }

      form.reset()
      props.onOpenChange?.(false)
      toast.success("Task updated")

      await new Promise((resolve) => setTimeout(resolve, 700))
      if (typeof window !== "undefined") {
        window.location.reload()
      }
    })
  }

  return (
    <Sheet {...props}>
      <SheetContent className="flex flex-col gap-6 sm:max-w-md overflow-auto">
        <SheetHeader className="text-left">
          <SheetTitle>Update Record</SheetTitle>
          <SheetDescription>
            Update the records details and save the changes
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dela Cruz"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Juan"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nameExtension"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Extension</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jr."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Martinez"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateIssued"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Isued Effectivity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 2022-01-01"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="positionTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. Teacher 1"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="itemNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Item No.</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 123456"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary/Rate</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 10000"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payGrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pay Grade</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employmentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a label" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {EmploymentStatusEnum.options.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="natureOfAppointment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nature of Appointment</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a appointment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {NatureOfAppointmentEnum.options.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="periodOfEmployment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Period Of Employment</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 1 year"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfPublication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Publication</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 01/01/2022 - 31/12/2023"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mode</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a mode" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {Mode.options.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="validated"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Validated</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfAction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Action</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 01/01/2022"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfRelease"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Release</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ex. 01/01/2022"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agencyReceivingOffer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Agency RO</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="gap-2 pt-2 sm:space-x-0 sticky bottom-[-20px] right-0 w-full bg-white border-t border-t-gray-200">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button disabled={isUpdatePending}>
                {isUpdatePending && (
                  <Icons.spinner
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Save
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
