-- CreateTable
CREATE TABLE "public"."m_pasangan" (
    "uid_pasangan" VARCHAR(10) NOT NULL,
    "uid_sektor" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_pasangan_pkey" PRIMARY KEY ("uid_pasangan")
);

-- CreateTable
CREATE TABLE "public"."r_pasangan_atlet" (
    "uid_pasangan_atlet" VARCHAR(10) NOT NULL,
    "uid_pasangan" VARCHAR(10) NOT NULL,
    "uid_atlet" VARCHAR(10) NOT NULL,
    "mulai_pasangan" DATE NOT NULL,
    "selesai_pasangan" DATE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "r_pasangan_atlet_pkey" PRIMARY KEY ("uid_pasangan_atlet")
);

-- CreateIndex
CREATE UNIQUE INDEX "r_pasangan_atlet_uid_pasangan_uid_atlet_key" ON "public"."r_pasangan_atlet"("uid_pasangan", "uid_atlet");

-- AddForeignKey
ALTER TABLE "public"."m_pasangan" ADD CONSTRAINT "m_pasangan_uid_sektor_fkey" FOREIGN KEY ("uid_sektor") REFERENCES "public"."m_sektor"("uid_sektor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pasangan" ADD CONSTRAINT "m_pasangan_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pasangan" ADD CONSTRAINT "m_pasangan_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pasangan" ADD CONSTRAINT "m_pasangan_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pasangan_atlet" ADD CONSTRAINT "r_pasangan_atlet_uid_pasangan_fkey" FOREIGN KEY ("uid_pasangan") REFERENCES "public"."m_pasangan"("uid_pasangan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pasangan_atlet" ADD CONSTRAINT "r_pasangan_atlet_uid_atlet_fkey" FOREIGN KEY ("uid_atlet") REFERENCES "public"."m_atlet"("uid_atlet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pasangan_atlet" ADD CONSTRAINT "r_pasangan_atlet_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pasangan_atlet" ADD CONSTRAINT "r_pasangan_atlet_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_pasangan_atlet" ADD CONSTRAINT "r_pasangan_atlet_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;
