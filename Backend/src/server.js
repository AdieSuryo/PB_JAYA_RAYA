import express from "express";
import { config } from "dotenv";

import { connectDB, disconnectDB } from "./config/db.js";

// ==============================
// IMPORT MODULES
// ==============================
import { authRoutes } from "./modules/auth/index.js";
import { userRoutes } from "./modules/users/index.js";
import { accessRoutes } from "./modules/access/index.js";
import { atletRoutes } from "./modules/atlet/index.js";
import { pelatihRoutes } from "./modules/pelatih/index.js";
import { provinsiRoutes } from "./modules/provinsi/index.js";


import errorHandler from "./middleware/errorHandler.js";
import prismaErrorHandler from "./middleware/prismaErrorHandler.js";

import cors from "cors";

config();

await connectDB();

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// ==============================
// MIDDLEWARE
// ==============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==============================
// API ROUTES
// ==============================
app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/access", accessRoutes)

app.use("/api/atlet", atletRoutes);

app.use("/api/pelatih", pelatihRoutes);

app.use("/api/provinsi", provinsiRoutes);


app.use(prismaErrorHandler);

app.use(errorHandler);

// ==============================
// SERVER
// ==============================
const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on PORT ${PORT}`);
});


// ==============================
// UNHANDLED REJECTION
// ==============================
process.on("unhandledRejection", async (err) => {

    console.error(err);

    server.close(async () => {

        await disconnectDB();

        process.exit(1);

    });

});

// ==============================
// UNCAUGHT EXCEPTION
// ==============================
process.on("uncaughtException", async (err) => {

    console.error(err);

    server.close(async () => {

        await disconnectDB();

        process.exit(1);

    });

});

// ==============================
// GRACEFUL SHUTDOWN
// ==============================
process.on("SIGTERM", async () => {

    console.log("SIGTERM received.");

    server.close(async () => {

        await disconnectDB();

        process.exit(0);

    });

});