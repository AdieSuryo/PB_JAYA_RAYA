/*
  Warnings:

  - You are about to drop the column `urtan` on the `m_menu` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."m_menu" DROP COLUMN "urtan",
ADD COLUMN     "urutan" INTEGER NOT NULL DEFAULT 0;
