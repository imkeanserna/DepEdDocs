-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "nameExtension" DROP NOT NULL,
ALTER COLUMN "periodOfEmployment" DROP NOT NULL,
ALTER COLUMN "validated" DROP NOT NULL,
ALTER COLUMN "dateOfAction" DROP NOT NULL,
ALTER COLUMN "dateOfRelease" DROP NOT NULL,
ALTER COLUMN "agencyReceivingOffer" DROP NOT NULL;