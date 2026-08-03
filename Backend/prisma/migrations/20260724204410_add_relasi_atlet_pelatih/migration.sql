-- CreateTable
CREATE TABLE "public"."r_AtletPelatih" (
    "uid_atlet" VARCHAR(10) NOT NULL,
    "uid_pelatih" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,

    CONSTRAINT "r_AtletPelatih_pkey" PRIMARY KEY ("uid_atlet","uid_pelatih")
);

-- AddForeignKey
ALTER TABLE "public"."r_AtletPelatih" ADD CONSTRAINT "r_AtletPelatih_uid_atlet_fkey" FOREIGN KEY ("uid_atlet") REFERENCES "public"."m_atlet"("uid_atlet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_AtletPelatih" ADD CONSTRAINT "r_AtletPelatih_uid_pelatih_fkey" FOREIGN KEY ("uid_pelatih") REFERENCES "public"."m_pelatih"("uid_pelatih") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_AtletPelatih" ADD CONSTRAINT "r_AtletPelatih_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_AtletPelatih" ADD CONSTRAINT "r_AtletPelatih_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;
