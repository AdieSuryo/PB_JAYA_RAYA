-- CreateEnum
CREATE TYPE "public"."role_user" AS ENUM ('Admin', 'Manajemen', 'pelatih_teknik', 'Atlet', 'pelatih_fisik');

-- CreateEnum
CREATE TYPE "public"."jenis_kelamin" AS ENUM ('Laki_Laki', 'Perempuan');

-- CreateEnum
CREATE TYPE "public"."pegangan_raket" AS ENUM ('Kanan', 'Kiri');

-- CreateEnum
CREATE TYPE "public"."status_atlet" AS ENUM ('Aktif', 'Non_Aktif');

-- CreateTable
CREATE TABLE "public"."m_user" (
    "uid_user" VARCHAR(10) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "public"."role_user" NOT NULL,
    "uid_atlet" VARCHAR(10),
    "uid_pelatih" VARCHAR(10),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10),
    "updated_by_uid" VARCHAR(10),
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_user_pkey" PRIMARY KEY ("uid_user")
);

-- CreateTable
CREATE TABLE "public"."m_atlet" (
    "uid_atlet" VARCHAR(10) NOT NULL,
    "nik" VARCHAR(20) NOT NULL,
    "id_pbsi" VARCHAR(20) NOT NULL,
    "nama_lengkap" VARCHAR(100) NOT NULL,
    "nama_ayah" VARCHAR(100) NOT NULL,
    "nama_ibu" VARCHAR(100) NOT NULL,
    "tempat_lahir" VARCHAR(100) NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "alamat" TEXT NOT NULL,
    "jenis_kelamin" "public"."jenis_kelamin" NOT NULL,
    "pegangan_raket" "public"."pegangan_raket" NOT NULL,
    "tinggi_badan" INTEGER NOT NULL,
    "berat_badan" INTEGER NOT NULL,
    "status_atlet" "public"."status_atlet" NOT NULL,
    "foto" VARCHAR(255) NOT NULL,
    "uid_provinsi" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_atlet_pkey" PRIMARY KEY ("uid_atlet")
);

-- CreateTable
CREATE TABLE "public"."m_pelatih" (
    "uid_pelatih" VARCHAR(10) NOT NULL,
    "nik" VARCHAR(20) NOT NULL,
    "nama_lengkap" VARCHAR(100) NOT NULL,
    "jenis_kelamin" "public"."jenis_kelamin" NOT NULL,
    "tanggal_lahir" DATE NOT NULL,
    "tahun_bergabung" INTEGER NOT NULL,
    "pernah_melatih_sebelumnya" BOOLEAN NOT NULL,
    "klub_negara_sebelumnya" VARCHAR(100) NOT NULL,
    "mantan_atlet_nasional" BOOLEAN NOT NULL,
    "asal_klub_nasional" VARCHAR(100) NOT NULL,
    "mantan_pelatnas" BOOLEAN NOT NULL,
    "tahun_pelatnas" INTEGER NOT NULL,
    "foto" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "uid_provinsi" VARCHAR(10) NOT NULL,
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_pelatih_pkey" PRIMARY KEY ("uid_pelatih")
);

-- CreateTable
CREATE TABLE "public"."m_provinsi" (
    "uid_provinsi" VARCHAR(10) NOT NULL,
    "nama_provinsi" VARCHAR(100) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "created_by_uid" VARCHAR(10) NOT NULL,
    "updated_by_uid" VARCHAR(10) NOT NULL,
    "deleted_by_uid" VARCHAR(10),

    CONSTRAINT "m_provinsi_pkey" PRIMARY KEY ("uid_provinsi")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_user_username_key" ON "public"."m_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "m_user_uid_atlet_key" ON "public"."m_user"("uid_atlet");

-- CreateIndex
CREATE UNIQUE INDEX "m_user_uid_pelatih_key" ON "public"."m_user"("uid_pelatih");

-- CreateIndex
CREATE UNIQUE INDEX "m_atlet_nik_key" ON "public"."m_atlet"("nik");

-- CreateIndex
CREATE UNIQUE INDEX "m_pelatih_nik_key" ON "public"."m_pelatih"("nik");

-- AddForeignKey
ALTER TABLE "public"."m_user" ADD CONSTRAINT "m_user_uid_atlet_fkey" FOREIGN KEY ("uid_atlet") REFERENCES "public"."m_atlet"("uid_atlet") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_user" ADD CONSTRAINT "m_user_uid_pelatih_fkey" FOREIGN KEY ("uid_pelatih") REFERENCES "public"."m_pelatih"("uid_pelatih") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_user" ADD CONSTRAINT "m_user_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_user" ADD CONSTRAINT "m_user_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_user" ADD CONSTRAINT "m_user_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_atlet" ADD CONSTRAINT "m_atlet_uid_provinsi_fkey" FOREIGN KEY ("uid_provinsi") REFERENCES "public"."m_provinsi"("uid_provinsi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_atlet" ADD CONSTRAINT "m_atlet_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_atlet" ADD CONSTRAINT "m_atlet_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_atlet" ADD CONSTRAINT "m_atlet_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pelatih" ADD CONSTRAINT "m_pelatih_uid_provinsi_fkey" FOREIGN KEY ("uid_provinsi") REFERENCES "public"."m_provinsi"("uid_provinsi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pelatih" ADD CONSTRAINT "m_pelatih_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pelatih" ADD CONSTRAINT "m_pelatih_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_pelatih" ADD CONSTRAINT "m_pelatih_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_provinsi" ADD CONSTRAINT "m_provinsi_created_by_uid_fkey" FOREIGN KEY ("created_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_provinsi" ADD CONSTRAINT "m_provinsi_updated_by_uid_fkey" FOREIGN KEY ("updated_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_provinsi" ADD CONSTRAINT "m_provinsi_deleted_by_uid_fkey" FOREIGN KEY ("deleted_by_uid") REFERENCES "public"."m_user"("uid_user") ON DELETE SET NULL ON UPDATE CASCADE;
