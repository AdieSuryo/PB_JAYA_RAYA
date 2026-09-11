-- CreateTable
CREATE TABLE "public"."m_menu" (
    "uid_menu" VARCHAR(10) NOT NULL,
    "nama_menu" VARCHAR(100) NOT NULL,
    "kode_menu" VARCHAR(100) NOT NULL,
    "route" VARCHAR(255),
    "icon" VARCHAR(100),
    "uid_parent" VARCHAR(10),
    "urtan" INTEGER NOT NULL DEFAULT 0,
    "status_aktif" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upadated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "m_menu_pkey" PRIMARY KEY ("uid_menu")
);

-- CreateTable
CREATE TABLE "public"."m_permission" (
    "uid_permission" VARCHAR(10) NOT NULL,
    "kode_permission" VARCHAR(100) NOT NULL,
    "nama_permission" VARCHAR(100) NOT NULL,
    "action" VARCHAR(50) NOT NULL,
    "uid_menu" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "m_permission_pkey" PRIMARY KEY ("uid_permission")
);

-- CreateTable
CREATE TABLE "public"."r_role_menu" (
    "uid_role" VARCHAR(10) NOT NULL,
    "uid_menu" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "r_role_menu_pkey" PRIMARY KEY ("uid_role","uid_menu")
);

-- CreateTable
CREATE TABLE "public"."r_role_permission" (
    "uid_role" VARCHAR(10) NOT NULL,
    "uid_permission" VARCHAR(10) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "r_role_permission_pkey" PRIMARY KEY ("uid_role","uid_permission")
);

-- CreateIndex
CREATE UNIQUE INDEX "m_menu_kode_menu_key" ON "public"."m_menu"("kode_menu");

-- CreateIndex
CREATE UNIQUE INDEX "m_permission_kode_permission_key" ON "public"."m_permission"("kode_permission");

-- AddForeignKey
ALTER TABLE "public"."m_menu" ADD CONSTRAINT "m_menu_uid_parent_fkey" FOREIGN KEY ("uid_parent") REFERENCES "public"."m_menu"("uid_menu") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."m_permission" ADD CONSTRAINT "m_permission_uid_menu_fkey" FOREIGN KEY ("uid_menu") REFERENCES "public"."m_menu"("uid_menu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_role_menu" ADD CONSTRAINT "r_role_menu_uid_role_fkey" FOREIGN KEY ("uid_role") REFERENCES "public"."m_role"("uid_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_role_menu" ADD CONSTRAINT "r_role_menu_uid_menu_fkey" FOREIGN KEY ("uid_menu") REFERENCES "public"."m_menu"("uid_menu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_role_permission" ADD CONSTRAINT "r_role_permission_uid_role_fkey" FOREIGN KEY ("uid_role") REFERENCES "public"."m_role"("uid_role") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."r_role_permission" ADD CONSTRAINT "r_role_permission_uid_permission_fkey" FOREIGN KEY ("uid_permission") REFERENCES "public"."m_permission"("uid_permission") ON DELETE RESTRICT ON UPDATE CASCADE;
