-- CreateEnum
CREATE TYPE "public"."gender_sektor" AS ENUM ('Putra', 'Putri', 'Campuran');

-- AlterTable
ALTER TABLE "public"."m_sektor" ADD COLUMN     "gender_sektpr" "public"."gender_sektor";
