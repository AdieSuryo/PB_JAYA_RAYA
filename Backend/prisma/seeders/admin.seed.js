import bcrypt from "bcrypt";

export async function seedAdmin(prisma) {

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await prisma.mUser.upsert({
        where: {
            uid_user: "USR001"
        },
        update: {},
        create: {
            uid_user: "USR001",
            username: "admin",
            password: hashedPassword,
            role: "Admin"
        }
    });

    console.log("✅ Admin berhasil dibuat.");

}