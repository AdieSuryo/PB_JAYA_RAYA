-- AlterTable
ALTER TABLE "public"."m_atlet" ADD COLUMN     "uid_sektor" VARCHAR(10);

-- CreateTable
CREATE TABLE "public"."m_sektor" (
    "uid_sektor" VARCHAR(10) NOT NULL,
    "nama_sektor" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_sektor_pkey" PRIMARY KEY ("uid_sektor")
);

-- CreateTable
CREATE TABLE "public"."r_pelatih_sektor" (
    "uid_pelatih_sektor" VARCHAR(10) NOT NULL,
    "uid_pelatih" VARCHAR(10) NOT NULL,
    "uid_sektor" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" TEXT,

    CONSTRAINT "r_pelatih_sektor_pkey" PRIMARY KEY ("uid_pelatih_sektor")
);

-- CreateTable
CREATE TABLE "public"."r_atlet_sektor" (
    "uid_atlet_sektor" VARCHAR(10) NOT NULL,
    "uid_atlet" VARCHAR(10) NOT NULL,
    "uid_sektor" VARCHAR(10) NOT NULL,
    "mulai_sektor" DATE NOT NULL,
    "selesai_sektor" DATE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "r_atlet_sektor_pkey" PRIMARY KEY ("uid_atlet_sektor")
);

-- CreateIndex
CREATE UNIQUE INDEX "r_pelatih_sektor_uid_pelatih_uid_sektor_key" ON "public"."r_pelatih_sektor"("uid_pelatih", "uid_sektor");

-- AddForeignKey
ALTER TABLE "public"."m_atlet" ADD CONSTRAINT "m_atlet_uid_sektor_fkey" FOREIGN KEY ("uid_sektor") REFERENCES "public"."m_sektor"("uid_sektor") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_sektor" ADD CONSTRAINT "m_sektor_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_sektor" ADD CONSTRAINT "m_sektor_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_sektor" ADD CONSTRAINT "m_sektor_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pelatih_sektor" ADD CONSTRAINT "r_pelatih_sektor_uid_pelatih_fkey" FOREIGN KEY ("uid_pelatih") REFERENCES "public"."m_pelatih"("uid_pelatih") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pelatih_sektor" ADD CONSTRAINT "r_pelatih_sektor_uid_sektor_fkey" FOREIGN KEY ("uid_sektor") REFERENCES "public"."m_sektor"("uid_sektor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pelatih_sektor" ADD CONSTRAINT "r_pelatih_sektor_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pelatih_sektor" ADD CONSTRAINT "r_pelatih_sektor_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pelatih_sektor" ADD CONSTRAINT "r_pelatih_sektor_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_atlet_sektor" ADD CONSTRAINT "r_atlet_sektor_uid_atlet_fkey" FOREIGN KEY ("uid_atlet") REFERENCES "public"."m_atlet"("uid_atlet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_atlet_sektor" ADD CONSTRAINT "r_atlet_sektor_uid_sektor_fkey" FOREIGN KEY ("uid_sektor") REFERENCES "public"."m_sektor"("uid_sektor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_atlet_sektor" ADD CONSTRAINT "r_atlet_sektor_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_atlet_sektor" ADD CONSTRAINT "r_atlet_sektor_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_atlet_sektor" ADD CONSTRAINT "r_atlet_sektor_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;
