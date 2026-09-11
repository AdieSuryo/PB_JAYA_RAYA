/*
  Warnings:

  - Made the column `gender_sektor` on table `m_sektor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."m_sektor" ALTER COLUMN "gender_sektor" SET NOT NULL;
