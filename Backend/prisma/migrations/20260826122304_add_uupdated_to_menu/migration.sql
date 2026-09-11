/*
  Warnings:

  - You are about to drop the column `upadated_at` on the `m_menu` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `m_menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."m_menu" DROP COLUMN "upadated_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
