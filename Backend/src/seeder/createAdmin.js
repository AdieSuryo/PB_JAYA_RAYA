import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {

    // Cek apakah admin sudah ada
    const existingAdmin = await prisma.mUser.findFirst({
        where: {
            username: "admin"
        }
    });

    if (existingAdmin) {
        console.log("Admin sudah ada.");
        return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Buat akun admin
    const admin = await prisma.mUser.create({
        data: {
            uid_user: "USR001",
            username: "admin",
            password: hashedPassword,
            role: "Admin"
        }
    });

    console.log("Admin berhasil dibuat.");
    console.log(admin);
}

main()
    .catch((err) => {
        console.error(err);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });