"use client";

import Link from "next/link"
import UserAccountDropDown from "./UserAccountDropDown"

export const Appbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <UserAccountDropDown />
      </div>
    </div>
  )
}
