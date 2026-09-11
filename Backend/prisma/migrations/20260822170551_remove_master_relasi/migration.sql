/*
  Warnings:

  - You are about to drop the column `uid_sektor` on the `m_atlet` table. All the data in the column will be lost.
  - You are about to drop the `m_jenis_pelatih` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `m_pasangan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `m_sektor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `r_AtletPelatih` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `r_PelatihJenisPelatih` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `r_atlet_sektor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `r_pasangan_atlet` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `r_pelatih_sektor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."m_atlet" DROP CONSTRAINT "m_atlet_uid_sektor_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_jenis_pelatih" DROP CONSTRAINT "m_jenis_pelatih_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_jenis_pelatih" DROP CONSTRAINT "m_jenis_pelatih_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_jenis_pelatih" DROP CONSTRAINT "m_jenis_pelatih_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_pasangan" DROP CONSTRAINT "m_pasangan_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_pasangan" DROP CONSTRAINT "m_pasangan_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_pasangan" DROP CONSTRAINT "m_pasangan_uid_sektor_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_pasangan" DROP CONSTRAINT "m_pasangan_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_sektor" DROP CONSTRAINT "m_sektor_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_sektor" DROP CONSTRAINT "m_sektor_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."m_sektor" DROP CONSTRAINT "m_sektor_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_AtletPelatih" DROP CONSTRAINT "r_AtletPelatih_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_AtletPelatih" DROP CONSTRAINT "r_AtletPelatih_uid_atlet_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_AtletPelatih" DROP CONSTRAINT "r_AtletPelatih_uid_pelatih_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_AtletPelatih" DROP CONSTRAINT "r_AtletPelatih_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" DROP CONSTRAINT "r_PelatihJenisPelatih_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" DROP CONSTRAINT "r_PelatihJenisPelatih_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" DROP CONSTRAINT "r_PelatihJenisPelatih_uid_jenis_pelatih_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" DROP CONSTRAINT "r_PelatihJenisPelatih_uid_pelatih_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" DROP CONSTRAINT "r_PelatihJenisPelatih_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_atlet_sektor" DROP CONSTRAINT "r_atlet_sektor_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_atlet_sektor" DROP CONSTRAINT "r_atlet_sektor_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_atlet_sektor" DROP CONSTRAINT "r_atlet_sektor_uid_atlet_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_atlet_sektor" DROP CONSTRAINT "r_atlet_sektor_uid_sektor_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_atlet_sektor" DROP CONSTRAINT "r_atlet_sektor_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pasangan_atlet" DROP CONSTRAINT "r_pasangan_atlet_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pasangan_atlet" DROP CONSTRAINT "r_pasangan_atlet_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pasangan_atlet" DROP CONSTRAINT "r_pasangan_atlet_uid_atlet_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pasangan_atlet" DROP CONSTRAINT "r_pasangan_atlet_uid_pasangan_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pasangan_atlet" DROP CONSTRAINT "r_pasangan_atlet_updated_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pelatih_sektor" DROP CONSTRAINT "r_pelatih_sektor_created_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pelatih_sektor" DROP CONSTRAINT "r_pelatih_sektor_deleted_by_uid_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pelatih_sektor" DROP CONSTRAINT "r_pelatih_sektor_uid_pelatih_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pelatih_sektor" DROP CONSTRAINT "r_pelatih_sektor_uid_sektor_fkey";

-- DropForeignKey
ALTER TABLE "public"."r_pelatih_sektor" DROP CONSTRAINT "r_pelatih_sektor_updated_by_uid_fkey";

-- AlterTable
ALTER TABLE "public"."m_atlet" DROP COLUMN "uid_sektor";

-- DropTable
DROP TABLE "public"."m_jenis_pelatih";

-- DropTable
DROP TABLE "public"."m_pasangan";

-- DropTable
DROP TABLE "public"."m_sektor";

-- DropTable
DROP TABLE "public"."r_AtletPelatih";

-- DropTable
DROP TABLE "public"."r_PelatihJenisPelatih";

-- DropTable
DROP TABLE "public"."r_atlet_sektor";

-- DropTable
DROP TABLE "public"."r_pasangan_atlet";

-- DropTable
DROP TABLE "public"."r_pelatih_sektor";

-- DropEnum
DROP TYPE "public"."gender_sektor";
