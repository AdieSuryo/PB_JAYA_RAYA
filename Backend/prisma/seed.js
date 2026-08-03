import { PrismaClient } from "@prisma/client";

import { seedAdmin } from "./seeders/admin.seed.js";
import { seedProvinsi } from "./seeders/provinsi.seed.js";

const prisma = new PrismaClient();

async function main() {

    console.log("================================");
    console.log("PB JAYA RAYA SEEDER");
    console.log("================================");

    await seedAdmin(prisma);

    await seedProvinsi(prisma);

    console.log("================================");
    console.log("Semua Seeder Berhasil");
    console.log("================================");

}

main()
.catch((err)=>{
    console.error(err);
})
.finally(async()=>{
    await prisma.$disconnect();
});