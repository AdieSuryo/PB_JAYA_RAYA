/*
  Warnings:

  - You are about to drop the column `role` on the `m_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."m_user" DROP COLUMN "role";

-- DropEnum
DROP TYPE "public"."role_user";
