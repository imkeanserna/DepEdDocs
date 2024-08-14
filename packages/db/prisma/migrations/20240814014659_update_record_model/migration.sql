-- CreateEnum
CREATE TYPE "NatureOfAppointment" AS ENUM ('PROMOTION', 'DEMOTION', 'ORIGINAL', 'REEMPLOYMENT', 'RECLASSIFICATION', 'TRANSFER');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('PERMANENT', 'PROVISIONAL', 'SUBSTITUTE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "nameExtension" TEXT NOT NULL DEFAULT 'N/A',
    "dateIssued" TIMESTAMP(3) NOT NULL,
    "positionTiltle" TEXT NOT NULL,
    "itemNo" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "natureOfApp" "NatureOfAppointment" NOT NULL,
    "periodOfEmployment" TEXT NOT NULL DEFAULT 'N/A',
    "employmentStat" "EmploymentStatus" NOT NULL,
    "dateOfPublication" TIMESTAMP(3) NOT NULL,
    "model" TEXT NOT NULL DEFAULT 'N/A',
    "validated" TEXT NOT NULL DEFAULT 'N/A',
    "dateOfAction" TIMESTAMP(3) NOT NULL,
    "dateOfRelease" TIMESTAMP(3) NOT NULL,
    "agencyReceivingOffer" TEXT NOT NULL DEFAULT 'N/A',
    "encoderId" TEXT,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_encoderId_fkey" FOREIGN KEY ("encoderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
