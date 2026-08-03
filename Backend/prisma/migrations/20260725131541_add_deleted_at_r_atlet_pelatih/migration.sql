-- AlterTable
ALTER TABLE "public"."r_AtletPelatih" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by_uid" TEXT;
