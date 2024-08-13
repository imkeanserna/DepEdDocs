"use client";

import Link from "next/link"
import UserAccountDropDown from "./UserAccountDropDown"

export const Appbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-3 bg-gray-300">
      <div className="flex items-center gap-2">
        <div>hamb</div>
        <Link href="/">
          <div className="text-3xl font-black">Dep<span className="text-red-500">ED</span></div>
        </Link>
      </div>
      <div>
        <UserAccountDropDown />
      </div>
    </div>
  )
}
