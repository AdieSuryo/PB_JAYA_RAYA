-- CreateTable
CREATE TABLE "public"."m_role" (
    "uid_role" VARCHAR(10) NOT NULL,
    "nama_role" VARCHAR(10) NOT NULL,
    "kode_role" VARCHAR(10) NOT NULL,
    "deskripsi" VARCHAR(10) NOT NULL,
    "status_aktif" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "m_role_pkey" PRIMARY KEY ("uid_role")
);

-- CreateTable
CREATE TABLE "public"."r_user_role" (
    "uid_user" VARCHAR(10) NOT NULL,
    "uid_role" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "r_user_role_pkey" PRIMARY KEY ("uid_user","uid_role")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_role_nama_role_key" ON "public"."m_role"("nama_role");

-- CreateIndex
CREATE UNIQUE INDEX "m_role_kode_role_key" ON "public"."m_role"("kode_role");

-- AddForeignKey
ALTER TABLE "public"."r_user_role" ADD CONSTRAINT "r_user_role_uid_user_fkey" FOREIGN KEY ("uid_user") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_user_role" ADD CONSTRAINT "r_user_role_uid_role_fkey" FOREIGN KEY ("uid_role") REFERENCES "public"."m_role"("uid_role") ON DELETE RESTRICT ON UPDATE CASCADE;
