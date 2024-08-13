"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@repo/ui/components/ui/dropdown-menu";
import { CircleHelp, LogOut, SunMoon, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const dropDownData = [
  {
    name: "Profile",
    icon: <UserRound size={15} />,
    href: "/profile",
  },
  {
    name: "Light Mode",
    icon: <SunMoon size={15} />,
    href: "/profile",
  },
  {
    name: "Help Center",
    icon: <CircleHelp size={15} />,
    href: "/profile",
  }
];

export default function UserAccountDropDown() {
  const router = useRouter();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-min-[10rem] flex items-center p-[0.2rem]  justify-center h-[2rem]">
          <div className="px-2 py-1 flex justify-between items-center gap-2 border rounded-md hover:bg-gray-200 border-gray-500">
            <div className="rounded-full border border-gray-500">
              <UserRound />
            </div>
            <p className="text-sm">Kean Dela Serna</p>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="!w-[15rem] dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg">
          <DropdownMenuLabel className="flex gap-4 items-center">
            <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center !h-[2rem]">
              <div className="p-1 border rounded-full border-[#1a1a1a]">
                <UserRound />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="max-w-[200px]">Kean</span>
              <span className="text-[0.8rem] max-w-[200px] text-gray-400">keande@gmail.com</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {dropDownData.map((item, index) => {
            return (
              <DropdownMenuItem className="flex gap-2" onClick={() => router.push("/profile")} key={index}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          {true && (
            <DropdownMenuItem
              onClick={async () => {
                router.push("/");
              }}
              className=" flex gap-2 focus:bg-blue-950 focus:text-gray-50"
            >
              <LogOut size={15} />
              Logout
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
