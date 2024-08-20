"use client";

import { SchoolIcon } from "lucide-react";
import { SignIn } from "@clerk/nextjs";
import React from 'react'

export default function SignInComponent() {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-gray-900 p-8 text-primary-foreground lg:p-12">
        <div className="max-w-[420px] space-y-6">
          <div className="flex items-center space-x-4">
            <SchoolIcon className="h-12 w-12" />
            <span className="text-5xl font-black">Dep<span className="text-red-500">ED</span></span>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Welcome back!</h2>
            <p className="text-muted-foreground">Enter your credentials to access your account.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="max-w-[420px] space-y-6">
          <SignIn />
        </div>
      </div>
    </div>
  )
}
