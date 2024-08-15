"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { PlusIcon, ReloadIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { useMediaQuery } from "../../hooks/use-media-query"
import { Button } from "@repo/ui/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/components/ui/drawer"

// import { createTask } from "../_lib/actions"
import { createTaskSchema, type CreateTaskSchema } from "../_lib/validations"
import { CreateTaskForm } from "./create-task-form"
import { createRecords } from "../_lib/actions"

export function CreateTaskDialog({ onCreate }: { onCreate: (newRecord: any) => void }) {
  const [open, setOpen] = React.useState(false)
  const [isCreatePending, startCreateTransition] = React.useTransition()
  const isDesktop = useMediaQuery("(min-width: 640px)")

  const form = useForm<CreateTaskSchema>({
    resolver: zodResolver(createTaskSchema),
  })

  function onSubmit(input: CreateTaskSchema) {
    startCreateTransition(async () => {
      // const { error } = await createRecords(input)
      //
      // if (error) {
      //   toast.error(error)
      //   return
      // }
      const convertedInput = {
        ...input,
        employmentStatus: input.employmentStatus.toUpperCase(),
        natureOfAppointment: input.natureOfAppointment.toUpperCase(),
        salary: Number(input.salary),
        payGrade: Number(input.payGrade)
      }

      console.log("sdadasdasd")
      const newRecord = await createRecords(convertedInput)


      onCreate(newRecord);


      form.reset()
      setOpen(false)
      toast.success("Task created")
    })
  }

  if (isDesktop)
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <PlusIcon className="mr-2 size-4" aria-hidden="true" />
            Add Record
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-[700px] max-h-[750px] overflow-auto">
          <DialogHeader>
            <DialogTitle>Create Record</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new record.
            </DialogDescription>
          </DialogHeader>
          <CreateTaskForm form={form} onSubmit={onSubmit}>
            <DialogFooter className="gap-2 pt-2 sm:space-x-0">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={isCreatePending}>
                {isCreatePending && (
                  <ReloadIcon
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Create
              </Button>
            </DialogFooter>
          </CreateTaskForm>
        </DialogContent>
      </Dialog>
    )

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          <PlusIcon className="mr-2 size-4" aria-hidden="true" />
          Add Record
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create task</DrawerTitle>
          <DrawerDescription>
            Fill in the details below to create a new task.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="gap-2 sm:space-x-0">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <Button disabled={isCreatePending}>
            {isCreatePending && (
              <ReloadIcon
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
