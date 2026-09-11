/*
  Warnings:

  - You are about to drop the column `gender_sektpr` on the `m_sektor` table. All the data in the column will be lost.

*/
ALTER TABLE "public"."m_sektor"
RENAME COLUMN "gender_sektpr" TO "gender_sektor";