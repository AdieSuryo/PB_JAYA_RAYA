/*
  Warnings:

  - The primary key for the `r_AtletPelatih` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[uid_atlet,uid_pelatih]` on the table `r_AtletPelatih` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uid_atlet_pelatih` to the `r_AtletPelatih` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."r_AtletPelatih" DROP CONSTRAINT "r_AtletPelatih_pkey",
ADD COLUMN     "uid_atlet_pelatih" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "r_AtletPelatih_pkey" PRIMARY KEY ("uid_atlet_pelatih");

-- CreateIndex
CREATE UNIQUE INDEX "r_AtletPelatih_uid_atlet_uid_pelatih_key" ON "public"."r_AtletPelatih"("uid_atlet", "uid_pelatih");
