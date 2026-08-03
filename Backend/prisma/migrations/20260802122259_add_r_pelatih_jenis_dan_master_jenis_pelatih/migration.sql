-- CreateTable
CREATE TABLE "public"."m_jenis_pelatih" (
    "uid_jenis_pelatih" VARCHAR(10) NOT NULL,
    "nama_jenis_pelatih" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_jenis_pelatih_pkey" PRIMARY KEY ("uid_jenis_pelatih")
);

-- CreateTable
CREATE TABLE "public"."r_PelatihJenisPelatih" (
    "uid_pelatih_jenis_pelatih" VARCHAR(10) NOT NULL,
    "uid_pelatih" VARCHAR(10) NOT NULL,
    "uid_jenis_pelatih" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "deleted_by_uid" TEXT,

    CONSTRAINT "r_PelatihJenisPelatih_pkey" PRIMARY KEY ("uid_pelatih_jenis_pelatih")
);

-- CreateIndex
CREATE UNIQUE INDEX "r_PelatihJenisPelatih_uid_pelatih_uid_jenis_pelatih_key" ON "public"."r_PelatihJenisPelatih"("uid_pelatih", "uid_jenis_pelatih");

-- AddForeignKey
ALTER TABLE "public"."m_jenis_pelatih" ADD CONSTRAINT "m_jenis_pelatih_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_jenis_pelatih" ADD CONSTRAINT "m_jenis_pelatih_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_jenis_pelatih" ADD CONSTRAINT "m_jenis_pelatih_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" ADD CONSTRAINT "r_PelatihJenisPelatih_uid_pelatih_fkey" FOREIGN KEY ("uid_pelatih") REFERENCES "public"."m_pelatih"("uid_pelatih") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" ADD CONSTRAINT "r_PelatihJenisPelatih_uid_jenis_pelatih_fkey" FOREIGN KEY ("uid_jenis_pelatih") REFERENCES "public"."m_jenis_pelatih"("uid_jenis_pelatih") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" ADD CONSTRAINT "r_PelatihJenisPelatih_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" ADD CONSTRAINT "r_PelatihJenisPelatih_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_PelatihJenisPelatih" ADD CONSTRAINT "r_PelatihJenisPelatih_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;
