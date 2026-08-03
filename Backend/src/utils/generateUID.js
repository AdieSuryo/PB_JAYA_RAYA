import { prisma } from "../config/db.js";

export const generateUID = async (model, field, prefix) => {

    const lastData = await prisma[model].findFirst({
        orderBy: {
            [field]: "desc"
        }
    });

    if (!lastData) {
        return `${prefix}001`;
    }

    const lastNumber = parseInt(
        lastData[field].replace(prefix, "")
    );

    const newNumber = lastNumber + 1;

    return `${prefix}${String(newNumber).padStart(3, "0")}`;
};