/*
  Warnings:

  - You are about to drop the column `encoderId` on the `Record` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_encoderId_fkey";

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "encoderId";
