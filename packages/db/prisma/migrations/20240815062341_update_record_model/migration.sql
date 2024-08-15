/*
  Warnings:

  - You are about to drop the column `employmentStat` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `natureOfApp` on the `Record` table. All the data in the column will be lost.
  - You are about to drop the column `positionTiltle` on the `Record` table. All the data in the column will be lost.
  - Added the required column `employmentStatus` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natureOfAppointment` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payGrade` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionTitle` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Record" DROP COLUMN "employmentStat",
DROP COLUMN "model",
DROP COLUMN "natureOfApp",
DROP COLUMN "positionTiltle",
ADD COLUMN     "employmentStatus" "EmploymentStatus" NOT NULL,
ADD COLUMN     "mode" TEXT NOT NULL DEFAULT 'N/A',
ADD COLUMN     "natureOfAppointment" "NatureOfAppointment" NOT NULL,
ADD COLUMN     "payGrade" INTEGER NOT NULL,
ADD COLUMN     "positionTitle" TEXT NOT NULL;
