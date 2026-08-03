import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

try {
  await prisma.$connect();
  console.log("Connected!");
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
}